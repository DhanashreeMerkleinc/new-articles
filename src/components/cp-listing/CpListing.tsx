import styles from './cpListing.module.scss';
import ListingCard from './CpListingCard';

interface prop {
  articleData: any;
}

const Listing = (props : prop) => {
  return (
    <>
      <div className={`container`}>
        <ul className={`${styles['cp-listing']} listing`} data-testid="listing">  
          {props?.articleData?.map((item: any, index: number) => (
            <li className={`${styles['listing-item']} listing-item`} key={index} data-testid="listing-item">
              <ListingCard data={item} />
            </li>
          ))}
        </ul>
      </div>  
    </>
  );
};

export default Listing;
