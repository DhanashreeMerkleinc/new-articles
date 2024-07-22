import React from 'react';
import Listing from "./components/cp-listing/CpListing";
import Banner from './components/common-component/cp-banner/CpBanner';
import Header from './components/common-component/cp-header/CpHeader';
import Footer from './components/common-component/cp-footer/CpFooter';
import Loader from './components/common-component/cp-loader/CpLoader';
import useFetchArticles from './hooks/useFetchArticles';
import './styles/baseGlobal.scss';

const App = () => {  
  const apiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';
  const { data: articleData, loading, error } = useFetchArticles(apiUrl);

  if (loading) {
    return <Loader />; 
  }

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
