import React from 'react';
import styles from './ProgrammingPage.module.css';

interface ProgrammingPageProps {
  programmingCarousel: JSX.Element[];
  programmingTechnologies: JSX.Element[];
}

const ProgrammingPage: React.FC<ProgrammingPageProps> = (props: ProgrammingPageProps) => {
  return (
    <div className={styles.ProgrammingPage}>
      <div className={styles.TechnologiesContainer}>
        <span className={styles.HeaderLight}>
          Technologies
        </span>
        <div className={styles.TechnologiesContent}>
          {props.programmingTechnologies}
        </div>
      </div>

      <div className={styles.ProjectsContainer}>
        <span className={styles.HeaderDark}>
          Projects
        </span>
        <div className={styles.Cards}>
          {props.programmingCarousel}
        </div>
      </div>
    </div>
  )
};

export default ProgrammingPage;
