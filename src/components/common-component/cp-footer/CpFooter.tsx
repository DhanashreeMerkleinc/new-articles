import React from 'react'
import styles from './cpFooter.module.scss';

const Footer = ()  => {
  return (
    <>
      <footer>
        <div className={`${styles['cp-footer']}`}>        
          <div className='container'>
            <p className={styles['copyright-txt']}>Copyright &copy; 2024 The New York Times Company.  All Rights Reserved.</p>
          </div>
        </div> 
      </footer>
    </>
  )
}

export default Footer;