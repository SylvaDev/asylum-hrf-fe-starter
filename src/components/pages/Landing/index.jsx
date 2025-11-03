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
    <div>
      <section className="title-section flex primary-c pt-4 pb-8">
        <div className="flex-c mx-auto">
          <h1 className="font-serif text-6xl mb-6 text-white">Asylum Office Grant Rate Tracker</h1>
          <h3 className="text-white text-md font-serif">
            The Asylum Office Grant Rate Tracker provides asylum seekers, 
            researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </section>
      <section className="graphs-section flex-c pt-10">
        <div className="flex-c">
          <div className="flex justify-center m-14 gap-20 text-2xl">
            <div className="flex-c gap-3">
              <img src={barGraph} 
                   className="h-[300px] w-[500px]" 
                   alt="image of a blue bar graph with three bars representing the grant rates for the three offices" 
                   aria-label="Bar chart preview: search grant rates by office"
              />
              <h3 className="font-serif">Search Grant Rates By Office</h3>
            </div>
            <div className="flex-c gap-3">
              <img src={pieChart} 
                   className="h-[300px] contain-content" 
                   alt="image of a red, yellow, green, and blue pie chart representing the grant rates for the different nationalities" 
                   aria-label="Pie chart preview: search grant rates by nationality"
              />
              <h3 className="font-serif">Search Grant Rates By Nationality</h3>
            </div>
            <div className="flex-c gap-3">
              <img src={lineGraph} 
                   className="h-[300px] w-[500px]" 
                   alt="image of a line graph in an upward trend representing the grant rates over time" 
                   aria-label="Line chart preview: search grant rates over time"
              />
              <h3 className="font-serif">Search Grant Rates Over Time</h3>
            </div>
          </div>
          <div className="flex align-center mx-auto gap-8">
            <button
              className="bg-[#aaaaaa] hover:bg-[#666555] px-[12px] py-[6px] text-white text-md font-semibold"
              onClick={handleViewData}
              aria-label="View the data visualizations"
            >
              View the Data
            </button>
            <button
              className="bg-[#aaaaaa] hover:bg-[#666555] px-[12px] py-[6px] text-white text-md font-semibold"
              onClick={handleDownloadData}
              aria-label="Download the dataset as CSV"
            >
              Download the Data
            </button>
          </div>
        </div>
      </section>
      <section className="middle-section flex">
        <div className="flex-1 hrf-img-container content-center p-20">
          <img src={paperStack} 
               className="middle-section-img rounded-2xl h-[70%] w-[100%]"
               alt="image of a stack of papers representing the asylum case data" 
               aria-label="Stack of papers representing asylum case data"
          />
        </div>
        <div className="middle-section-text-container flex-1 content-center p-20">
          <p className="text-xl font-serif">
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions 
            between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. 
            You can search for information on asylum grant rates by year, nationality, and asylum office, 
            visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

      <section className="systematic-disparity-section flex-c gap-12 ">
        <div className="systematic-disparity-section-header">
          <h3 className="text-5xl font-serif">Systemic Disparity Insights</h3>
        </div>
        <div className="systematic-disparity-section-details flex justify-center m-14 gap-20 text-2xl">
          <div className="flex-c-1 gap-10">
            <div className="systematic-disparity-details-header">
              <h3 className="text-3xl font-serif">36%</h3>
            </div>
            <div className="systematic-disparity-details-content">
              <p className="text-lg font-serif">
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in 
                fiscal year 2016 to 28 percent in fiscal year 2022.
              </p>
            </div>
          </div>
          <div className="flex-c-1 gap-10">
            <div className="systematic-disparity-details-header">
              <h3 className="text-3xl font-serif">5%</h3>
            </div>
            <div className="systematic-disparity-details-content">
              <p className="text-lg font-serif">The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
            </div>
          </div>
          <div className="flex-c-1 gap-10">
            <div className="systematic-disparity-details-header">
              <h3 className="text-3xl font-serif">6x Lower</h3>
            </div>
            <div className="systematic-disparity-details-content">
              <p className="text-lg font-serif">
                Between fiscal year 2017 and 2020, the New York asylum office's average grant 
                rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*
        Read more CTA: routes to the Human Rights First website for additional context.
      */}
      <section className="read-more-section">
        <button
          className="primary-c text-white px-4 py-2 hover:bg-[#666111]"
          onClick={handleReadMore}
          aria-label="Read more on the Human Rights First website"
        >
          Read More
        </button>
      </section>
      {/*
        Back to top utility: returns the viewport to the top of the page.
      */}
      <section className="back-to-top-section p-14">
        <button
          className="back-to-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          Back To Top ^
        </button>
      </section>
    </div>
  );
};
