import React, { Fragment } from 'react';
import Carousel from "./Carousel";
import styles from "./DesignPage.module.css";
import { designCarouselImageUrl } from "../master-data/carouselImageUrl";

interface DesignPageProps {
  designTools: JSX.Element[];
}

const DesignPage: React.FC<DesignPageProps> = (props: DesignPageProps) => {
  const renderDesignImageUrl = () => {
    let designUrl: JSX.Element[] = [];

    for (const imageUrl of designCarouselImageUrl) {
      designUrl.push(
        <img key={imageUrl} src={imageUrl} alt={imageUrl}/>
      );
    }

    return designUrl;
  };

  return (
    <Fragment>
      <Carousel imageComponents={renderDesignImageUrl()}/>
      <div className={styles.PhotographyContainer}>
        <div className={styles.ToolsContainer}>
          <span className={styles.Header}>
          Tools
        </span>
          <div className={styles.ToolsContent}>
            {props.designTools}
          </div>
        </div>

        {/*<span className={styles.Header}>*/}
        {/*  Gallery*/}
        {/*</span>*/}
        {/*<div className={styles.GalleryContainer}>*/}
        {/*  <Gallery photos={photos}/>*/}
        {/*</div>*/}
      </div>
    </Fragment>
  )
};

export default DesignPage;
