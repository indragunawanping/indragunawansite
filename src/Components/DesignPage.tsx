import React from 'react';
import Carousel from "./Carousel";
import styles from "./DesignPage.module.css";
import { designCarouselImageUrl } from "../master-data/carousel";
import designGallery from "../master-data/designGallery";
import { Gallery } from "../interfaces";

interface DesignPageProps {
  designTools: JSX.Element[];
  selectedDesignGallery: Gallery;
  handleCarouselImageLoad: () => void;
  handleOptionClick: (idx: number) => void;
}

const DesignPage: React.FC<DesignPageProps> = (props: DesignPageProps) => {
  const renderDesignImageUrl = () => {
    let designUrl: JSX.Element[] = [];

    for (const imageUrl of designCarouselImageUrl) {
      designUrl.push(
        <img key={imageUrl} src={imageUrl} alt="" onLoad={props.handleCarouselImageLoad}/>
      );
    }

    return designUrl;
  };

  const renderGalleryOption = () => {
    let galleryOptions: JSX.Element[] = [];

    for (const gallery of designGallery) {
      let galleryStyles = styles.Option;
      if (props.selectedDesignGallery.idx === gallery.idx) {
        galleryStyles = styles.SelectedOption;
      }

      galleryOptions.push(
        <span className={galleryStyles} onClick={() => props.handleOptionClick(gallery.idx)}>
          {gallery.name}
        </span>
      )
    }

    return galleryOptions;
  };

  const renderGallery = () => {
    let galleryElements: JSX.Element[] = [];

    props.selectedDesignGallery.src.forEach((gallerySrc) => {
      galleryElements.push(
        <img key={gallerySrc} src={gallerySrc} alt="" className={styles.ImageGallery}/>
      )
    });

    return galleryElements;
  };

  return (
    <div className={styles.DesignPage}>
      <Carousel imageComponents={renderDesignImageUrl()}/>
      <div className={styles.ToolsContainer}>
        <span className={styles.Header}>
          Tools
        </span>
        <div className={styles.ToolsContent}>
          {props.designTools}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.GalleryContainer}>
        <div className={styles.OptionGroup}>
          {renderGalleryOption()}
        </div>
        <div className={styles.GalleryGroup}>
          <span className={styles.GalleryHeader}>
            {props.selectedDesignGallery.name}
          </span>
          <div className={styles.GalleryContents}>
            {renderGallery()}
          </div>
        </div>
      </div>
    </div>
  )
};

export default DesignPage;
