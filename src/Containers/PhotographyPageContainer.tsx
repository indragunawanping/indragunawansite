import React from 'react';
import PhotographyPage from "../Components/PhotographyPage";
import { Popup } from "semantic-ui-react";
import { photographyTools} from "../master-data/tools";

const PhotographyPageContainer = () => {
  const extractPhotographyTools = () => {
    const photographyToolsElement: JSX.Element[] = [];
    for (const tool of photographyTools) {
      photographyToolsElement.push(
        <Popup key={tool.content} content={tool.content}
               trigger={<img key={tool.image} src={tool.image} alt=""/>}/>
      )
    }

    return photographyToolsElement;
  };

  return (
    <PhotographyPage photographyTools={extractPhotographyTools()}/>
  )
};

export default PhotographyPageContainer;
