import React from 'react';
import fotoProfil from '../../assets/foto-profil-rounded.webp';
import styles from './ProfileCard.module.css';
import logoGitHub from '../../assets/about-me/logo-github.webp';
import logoGitLab from '../../assets/about-me/logo-gitlab.webp';
import logoLinkedIn from '../../assets/about-me/logo-linkedin.webp';
import logoInstagram from '../../assets/about-me/logo-instagram.webp';

const ProfileCard = () => {
  return (
    <div className={styles.ProfileCardContainer}>
      <div className={styles.ImageContainer}>
        <img className={styles.ProfileImage} src={fotoProfil} alt={fotoProfil} />
      </div>
      <div className={styles.TextContainer}>
        <span className={styles.Name}>Indra Gunawan</span>
        <span className={styles.Title}>Front-End Developer</span>
        <div className={styles.ContactContainer}>
          <div className={styles.ContactSmallContainer}>
            <img className={styles.Contact} src={logoGitHub} alt=""/>
            <span>indragunawanping</span>
          </div>
          <div className={styles.ContactSmallContainer}>
            <img className={styles.Contact} src={logoGitLab} alt=""/>
            <span>indragunawanping</span>
          </div>
          <div className={styles.ContactSmallContainer}>
            <img className={styles.Contact} src={logoInstagram} alt=""/>
            <span>ind.gunawan</span>
          </div>
          <div className={styles.ContactSmallContainer}>
            <img className={styles.Contact} src={logoLinkedIn} alt=""/>
            <a href="https://www.linkedin.com/in/indra-gunawan-2311bb1ab" target="_blank">www.linkedin.com/in/indra-gunawan-2311bb1ab</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileCard;
