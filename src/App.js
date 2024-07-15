import React, { useEffect, useState } from 'react';
import Listing from "./components/cp-listing/CpListing";
import Banner from './components/common-component/cp-banner/CpBanner';
import Header from './components/common-component/cp-header/CpHeader';
import Footer from './components/common-component/cp-footer/CpFooter';
import { getRequest } from './utils/api-handler'; // Adjust the import path as necessary
import './styles/baseGlobal.scss';

const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';

    const getData = async (apiUrl) => {
      try {
        const resData = await getRequest(apiUrl);
        return resData; // Return the data
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw the error to handle it in the calling function
      }
    };

    getData(apiUrl)
      .then((resData) => {
        setArticleData(resData.results);
      })
      .catch((error) => {
        setError('Error loading articles');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="App">
      <Header/>
      <Banner />
      <Listing articleData={articleData} />
      <Footer />
    </main>
  );
};

export default App;
