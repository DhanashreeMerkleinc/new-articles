import React, { useState } from 'react';
import styles from './cpListing.module.scss';
import ListingCard from './CpListingCard';

interface prop {
  articleData: any;
}

const Listing = (props : prop) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`container`}>
        <ul className={`${styles['cp-listing']}`}>  
          {props?.articleData?.slice(0, expanded ? props?.articleData?.length : 9).map((item: any, index: number) => (
            <li className={styles['listing-item']} key={index}>
              <ListingCard data={item} />
            </li>
          ))}
        </ul> 
        <div className={styles['btn-wrap']}>
          <button onClick={toggleExpand} className={`btn btn-primary ${styles['button']}`}>
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>          
    </>
  );
};

export default Listing;
