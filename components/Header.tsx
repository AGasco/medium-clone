import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.scss';

function Header() {
  console.log(styles);
  return (
    <header className={styles.Container}>
      <div className={styles.Links}>
        <Link href="/">
          <img
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="Medium Logo"
          />
        </Link>
        <Link href="/about">
          <a className={styles.Link}>About</a>
        </Link>
        <Link href="/contact">
          <a className={styles.Link}>Contact</a>
        </Link>
        <Link href="/follow">
          <a className={styles['Link--green']}>Follow</a>
        </Link>
      </div>
      <div className={styles.Buttons}>
        <button>Sign in</button>
        <button>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
