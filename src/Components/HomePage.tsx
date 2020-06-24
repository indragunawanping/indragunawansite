import React from 'react';
import styles from './HomePage.module.css';
import foto_profil from '../assets/webp/foto-profil-rounded.webp';
import { Button } from "semantic-ui-react";
import footer_flat_mountain from '../assets/webp/flat-mountains.webp';

const HomePage = () => {
  return(
    <div className={styles.HomePageContainer}>
      <div className={styles.ImageContainer}>
        <img className={styles.ProfileImage} src={foto_profil} alt="foto_profil"/>
      </div>
      <div className={styles.TextContainer}>
        <span className={styles.Name}>Indra Gunawan</span>
        <span className={styles.Title}>Front-End Developer</span>
        <div className={styles.ButtonContainer}>
          <Button size="huge" inverted className={styles.Button}>
            Know Me
          </Button>
        </div>
      </div>
      <div className={styles.ImageFooterContainer}>
        <img className={styles.Footer} src={footer_flat_mountain} alt="foto_profil"/>
      </div>
    </div>
  )
};

export default HomePage;
