import React from 'react';
import { Card, Feed } from "semantic-ui-react";

import styles from "./AboutMeCard.module.css";
import { organizationsCardFeed } from "../../master-data/aboutMeCardFeed";

const OrganizationsCard = () => {
  const renderFeed = () => {
    const cardContent: JSX.Element[] = [];

    for (const feed of organizationsCardFeed) {
      cardContent.push(
        <Feed.Event key={feed.id} className={styles.FeedEvent}>
          <Feed.Label image={feed.image}/>
          <Feed.Content>
            <Feed.Summary className={styles.FeedSummary}>
              {feed.content}
            </Feed.Summary>
            <Feed.Date className={styles.FeedDate} content={feed.date}/>
          </Feed.Content>
        </Feed.Event>
      )
    }
    return cardContent;
  };

  return (
    <Card fluid className={styles.Card}>
      <Card.Content className={styles.CardHeader}>
        <Card.Header className={styles.CardHeaderText}>Organizations</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          {renderFeed()}
        </Feed>
      </Card.Content>
    </Card>
  )
};

export default OrganizationsCard;
