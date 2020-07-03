import React from 'react';
import styles from './HomePage.module.css';
import fotoProfil from '../assets/foto-profil-rounded.webp';
import { Button } from "semantic-ui-react";
import footerFlatMountain from '../assets/flat-mountains.webp';

interface HomePageProps {
  handleButtonKnowMeClick: () => void;
}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return(
    <div className={styles.HomePageContainer}>
      <div className={styles.ImageContainer}>
        <img className={styles.ProfileImage} src={fotoProfil} alt="foto_profil"/>
      </div>
      <div className={styles.TextContainer}>
        <span className={styles.Name}>Indra Gunawan</span>
        <span className={styles.Title}>Front-End Developer</span>
        <div className={styles.ButtonContainer}>
          <Button size="huge" inverted className={styles.Button} onClick={props.handleButtonKnowMeClick}>
            Know Me
          </Button>
        </div>
      </div>
      <div className={styles.ImageFooterContainer}>
        <img className={styles.Footer} src={footerFlatMountain} alt="foto_profil"/>
      </div>
    </div>
  )
};

export default HomePage;
