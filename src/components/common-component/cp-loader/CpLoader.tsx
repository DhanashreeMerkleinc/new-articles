import styles from './cpLoader.module.scss';

const Loader = () => {
  return (
    <div className={`${styles['cp-loader']}`}>
      <div className={`${styles['loader-wrap']}`}>
        <div className={`${styles['spinner']}`}></div>
        <p>Loading...</p>
      </div>      
    </div>
  );
};

export default Loader;
