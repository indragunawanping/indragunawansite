import React from 'react';
import styles from './ProgrammingPage.module.css';
import { Card } from 'semantic-ui-react';
import cards from "../master-data/cardsObject";

const ProgrammingPage = () => {
  const renderCards = () => {
    const cardsElements: JSX.Element[] = [];
    for (const card of cards) {
      cardsElements.push(
        <Card
          image={card.image}
          header={card.header}
          meta={card.meta}
          description={card.description}
          extra={card.extra}
          className={styles.Card}
        />
      )
    }
    return cardsElements;
  };

  return (
    <div className={styles.PageContainer}>
      <span className={styles.Header}>
        Projects
      </span>
      <div className={styles.Cards}>
        {renderCards()}
      </div>
    </div>
  )
};

export default ProgrammingPage;
