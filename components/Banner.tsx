import React from 'react';
import styles from '../styles/Banner.module.scss';

function Banner() {
  return (
    <div className={styles.Container}>
      <div className={styles.Text}>
        <h1 className={styles.Title}>
          <span>Medium</span> is a place to write, read and connect
        </h1>
        <h2 className={styles.Subtitle}>
          It&apos;s easy and free to post your thinking on any topic and connect
          with millions of readers
        </h2>
      </div>

      <img
        className={styles.Logo}
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="Medium Logo"
      />
    </div>
  );
}

export default Banner;
