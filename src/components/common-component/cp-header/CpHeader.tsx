import React, { useEffect, useState } from 'react';
import styles from './cpHeader.module.scss';

const Header = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    const onScroll = () => setScrollVal(window.pageYOffset);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);   
  
  return (
    <header className={`${styles['cp-header']} ${scrollVal > 0 ? styles['sticky'] : ''} cp-header`}>
      <div className={`${styles['container']} container`}>
        <div className={`${styles['date-wrap']}`}>
          <span className={`${styles['todays-date']}`}>{formattedDate}</span>
        </div>
        <a href='/' className={styles['logo-wrap']} aria-label={`Link to homepage`}>
          <img className={styles['logo']}
            src='/assets/images/logo.png'
            alt="logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
