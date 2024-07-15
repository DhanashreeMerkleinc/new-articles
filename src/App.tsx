import { useEffect, useState } from 'react';
import Listing from "./components/cp-listing/CpListing";
import Banner from './components/common-component/cp-banner/CpBanner';
import Header from './components/common-component/cp-header/CpHeader';
import Footer from './components/common-component/cp-footer/CpFooter';
import Loader from './components/common-component/cp-loader/CpLoader';
import { getRequest } from './utils/api-handler'; 
import './styles/baseGlobal.scss';


const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json';

    const getData = async (apiUrl: string) => {
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
        setLoading(false); // Set loading to false when data fetching is complete
      })
      .catch((error) => {
        setError("Error loading articles"); // Set error message
        setLoading(false); // Set loading to false on error
      });
  }, []);

  if (loading) {
    return <Loader />; // Render the Loader component while loading
  }

  if (error) {
    return <div>{error}</div>; // Render error message if there's an error
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
