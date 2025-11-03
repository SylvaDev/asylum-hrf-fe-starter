import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
// import { decodeBase64 } from '../../../utils/decodeBase64.js';

export const LandingPage = () => {

  const navigate = useNavigate();

  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 30;
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 15);
  };

  const handleReadMore = () => {
    window.location.href = 'https://humanrightsfirst.org';
  };

  const handleViewData = () => {
    navigate('/graphs');
  };

  const handleDownloadData = () => {
    downloadCSV();
  };

  return (
 html
  );
};
