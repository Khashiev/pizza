import React from 'react';
import styles from './Search.module.scss';

const Search = ({ searchValue, setSearcValue }) => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        id="Layer_1_1_"
        version="1.1"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M5,10c1.198,0,2.284-0.441,3.147-1.146l7,7l0.707-0.707l-7-7C9.559,7.284,10,6.198,10,5c0-2.757-2.243-5-5-5S0,2.243,0,5  S2.243,10,5,10z M5,1c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4S1,7.209,1,5C1,2.791,2.791,1,5,1z" />
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearcValue(event.target.value)}
        className={styles.input}
        placeholder="Search..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearcValue('')}
          className={styles.clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
