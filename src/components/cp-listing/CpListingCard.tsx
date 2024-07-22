import React from 'react'
import styles from './cpListing.module.scss';

interface prop{ 
  data:any;
}

const ListingCard = (props: prop) => {
  const data = props.data;
  const imageData = data.media && data.media.length > 0 ? data.media[0]['media-metadata'].find((meta: { format: string; }) => meta.format === 'mediumThreeByTwo210') : null;
  const imageUrl = imageData;

  return (
    <>
      <a href={data.url} className={`${styles['listing-link']}`}>
        <div className={`${styles['listing-card']}`}>
          <div className={styles['img-wrap']}>
            <img className={`${styles["image"]}`} src={imageUrl} alt="card image"/>      
            <span className={styles['c-tag']}>{data.section}</span>  
          </div>
          <div className={styles['content-wrap']}>          
            <h3 className={styles['c-title']}>{data.title}</h3>
            <p className={styles['c-desc']}>{data.abstract}</p>             
            <span className={`${styles['c-date']}`}>{data.published_date}</span>
          </div> 
          <div className={styles['border-wrap']}></div>
        </div>
      </a>
    </>
  )
}

export default ListingCard;