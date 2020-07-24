import React, { useEffect, useState } from 'react';
import DesignPage from "../Components/DesignPage";
import designTools from "../master-data/designTools";
import { Popup } from "semantic-ui-react";
import designGallery from "../master-data/designGallery";
import { Gallery } from "../interfaces";

const DesignPageContainer = () => {
  const [selectedDesignGallery, setSelectedDesignGallery] = useState<Gallery>({ idx: 0, name: "", src: [] });

  const extractDesignTools = () => {
    const designToolsElement: JSX.Element[] = [];
    for (const tool of designTools) {
      designToolsElement.push(
        <Popup key={tool.content} content={tool.content}
               trigger={<img key={tool.image} src={tool.image} alt=""/>}/>
      )
    }

    return designToolsElement;
  };

  const handleCarouselImageLoad = () => {

  };

  const handleOptionClick = (idx: number) => {
    setSelectedDesignGallery(designGallery[idx]);
  };

  useEffect(() => {
    setSelectedDesignGallery(designGallery[0]);
  }, []);

  return (
    <DesignPage designTools={extractDesignTools()}
                selectedDesignGallery={selectedDesignGallery}
                handleCarouselImageLoad={handleCarouselImageLoad}
                handleOptionClick={handleOptionClick}
    />
  )
};

export default DesignPageContainer;
