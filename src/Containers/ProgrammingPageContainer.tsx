import React from 'react';
import ProgrammingPage from "../Components/ProgrammingPage";
import projectCards from "../master-data/projectCards";
import { Card, Popup } from "semantic-ui-react";
import styles from "../Components/ProgrammingPage.module.css";
import programmingTechnologies from "../master-data/programmingTechnologies";

const ProgrammingPageContainer = () => {

  const renderProgrammingCarousel = () => {
    const programmingCarousel: JSX.Element[] = [];
    for (const card of projectCards) {
      programmingCarousel.push(
        <Card
          key={card.image}
          image={card.image}
          header={card.header}
          meta={card.meta}
          description={card.description}
          extra={card.extra}
          className={styles.Card}
        />
      )
    }
    return programmingCarousel;
  };

  const extractProgrammingTechnologies = () => {
    const programmingTechnologiesElement: JSX.Element[] = [];
    for (const technology of programmingTechnologies) {
      programmingTechnologiesElement.push(
          <Popup key={technology.content} content={technology.content}
                 trigger={<img key={technology.image} src={technology.image} alt=""/>} />
      )
    }

    return programmingTechnologiesElement;
  };

  return (
    <ProgrammingPage programmingCarousel={renderProgrammingCarousel()}
                     programmingTechnologies={extractProgrammingTechnologies()}
    />
  )
};

export default ProgrammingPageContainer;
