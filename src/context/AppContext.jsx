import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const API_BASE_URL = 'https://asylum-be.onrender.com';

/**
 * Ticket 2: API Integration Complete
 * - Uses axios to fetch data from API endpoints
 * - Stores the data in state
 * - Populates graphs with the fetched data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/fiscalSummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching fiscal data:', error);
      throw error;
    }
  };

  const getCitizenshipResults = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/citizenshipSummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      throw error;
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    try {
      // Fetch both endpoints in parallel
      const [fiscalData, citizenshipData] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults(),
      ]);

      // Combine the data into the expected structure
      const combinedData = {
        ...fiscalData,
        citizenshipResults: citizenshipData,
      };

      setGraphData(combinedData);
      setIsDataLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsDataLoading(false);
      // Keep existing data on error
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  // Fetch data when isDataLoading becomes true (triggered by updateQuery or initial mount)
  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  // Fetch data on initial mount
  useEffect(() => {
    setIsDataLoading(true);
  }, []);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
