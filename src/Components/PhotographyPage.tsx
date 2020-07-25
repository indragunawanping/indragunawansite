import React from 'react';
import Carousel from "./Carousel";
import styles from "./PhotographyPage.module.css";
import { photographyCarouselImageUrl } from '../master-data/carousel';
import { photographyGallery } from '../master-data/gallery';

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

  const renderGallery = () => {
    let galleryElements: JSX.Element[] = [];

    photographyGallery[0].src.forEach((gallerySrc) => {
      galleryElements.push(
        <img key={gallerySrc} src={gallerySrc} alt="" className={styles.ImageGallery}/>
      )
    });

    return galleryElements;
  };


  return (
    <div className={styles.PhotographyPage}>
      <Carousel imageComponents={renderPhotographyImageUrl()}/>
      <div className={styles.ToolsContainer}>
          <span className={styles.Header}>
            Tools
          </span>
        <div className={styles.ToolsContent}>
          {props.photographyTools}
        </div>
      </div>
      <div className={styles.divider}/>
      <div className={styles.GalleryContainer}>
        <div className={styles.GalleryGroup}>
          <span className={styles.GalleryHeader}>
            Another Shots
          </span>
          <div className={styles.GalleryContents}>
            {renderGallery()}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotographyPage;
