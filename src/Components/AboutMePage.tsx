import React from 'react';
import WorkExperiencesCard from "./AboutMeCards/WorkExperiencesCard";
import OrganizationsCard from "./AboutMeCards/OrganizationsCard";
import styles from './AboutMePage.module.css';
import EducationCard from "./AboutMeCards/EducationCard";
import ProfileCard from "./AboutMeCards/ProfileCard";

const AboutMePage = () => {
  return (
    <div className={styles.AboutMePage}>
      <ProfileCard/>
      <div className={styles.CardsContainerRow}>
        <OrganizationsCard/>
        <div className={styles.CardsContainerColumn}>
          <EducationCard/>
          <WorkExperiencesCard/>
          <div className={styles.Quotes}>
            <span >Good? Bad? Who Knows?</span>
            <span className={styles.Hypen}>-</span>
            <span>Ajahn Brahm</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutMePage;
