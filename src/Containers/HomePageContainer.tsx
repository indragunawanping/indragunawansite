import React from 'react';
import HomePage from "../Components/HomePage";
import { useHistory } from 'react-router';

const HomePageContainer = () => {
  const history = useHistory();

  const handleButtonKnowMeClick = () => {
    history.push('/indragunawansite/about-me');
  };

  return(
      <HomePage handleButtonKnowMeClick={handleButtonKnowMeClick}/>
  )
};

export default HomePageContainer;
