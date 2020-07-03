import React, { Fragment } from 'react';
import Carousel from "./Carousel";
import styles from "./PhotographyPage.module.css";
import { photographyCarouselImageUrl } from '../master-data/carouselImageUrl';

interface PhotographyPageProps {
  photographyTools: JSX.Element[];
}

const PhotographyPage: React.FC<PhotographyPageProps> = (props: PhotographyPageProps) => {
  const renderPhotographyImageUrl = () => {
    let photographyUrl: JSX.Element[] = [];

    for (const imageUrl of photographyCarouselImageUrl) {
      photographyUrl.push(
        <img key={imageUrl} src={imageUrl} alt={imageUrl}/>
      );
    }

    return photographyUrl;
  };

  return (
    <Fragment>
      <Carousel imageComponents={renderPhotographyImageUrl()}/>
      <div className={styles.ToolsContainer}>
          <span className={styles.Header}>
            Tools
          </span>
        <div className={styles.ToolsContent}>
          {props.photographyTools}
        </div>
      </div>
      {/*<span className={styles.Header}>*/}
      {/*  Gallery*/}
      {/*</span>*/}
      {/*<div className={styles.GalleryContainer}>*/}
      {/*  <Gallery photos={photos}/>*/}
      {/*</div>*/}
    </Fragment>
  )
};

export default PhotographyPage;
