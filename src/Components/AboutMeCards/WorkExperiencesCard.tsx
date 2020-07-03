import React from 'react';
import { Card, Feed } from "semantic-ui-react";
import styles from "./AboutMeCard.module.css";
import { workExperiencesCardFeed } from '../../master-data/aboutMeCardFeed';

const WorkExperiencesCard = () => {
  const renderFeed = () => {
    const cardContent: JSX.Element[] = [];

    for (const feed of workExperiencesCardFeed) {
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
        <Card.Header className={styles.CardHeaderText}>Work Experiences</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          {renderFeed()}
        </Feed>
      </Card.Content>
    </Card>
  )
};

export default WorkExperiencesCard;
