import React from 'react';
import DesignPage from "../Components/DesignPage";
import designTools from "../master-data/designTools";
import { Popup } from "semantic-ui-react";

const DesignPageContainer = () => {
  const extractDesignTools = () => {
    const designToolsElement: JSX.Element[] = [];
    for (const tool of designTools) {
      designToolsElement.push(
        <Popup key={tool.content} content={tool.content}
               trigger={<img key={tool.image} src={tool.image} alt=""/>} />
      )
    }

    return designToolsElement;
  };

  return(
    <DesignPage designTools={extractDesignTools()}/>
  )
};

export default DesignPageContainer;
