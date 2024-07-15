import React from 'react';
import styles from './cpBanner.module.scss';

const Banner = () => {
  return (
    <div className={`${styles['cp-banner']} banner`}>  
      <div className={`container`}>  
        <div className={`${styles['image-wrap']}`}>
          <img
            className={`${styles["image"]}`}
            src={'/assets/images/imageBanner.jpeg'}
            alt="blog-image" loading='lazy'
          />
          <div className={`${styles['content-wrap']}`}>
            <h2 className={`${styles['title']} ${styles['highlighted-text']}`}>Our Articles</h2>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Banner;
