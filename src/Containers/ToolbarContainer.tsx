import React, { Fragment, useState } from 'react';
import NavigationBar from "../Components/Toolbar/NavigationBar";
import SideDrawer from "../Components/Toolbar/SideDrawer";
import { useHistory } from 'react-router';

const ToolbarContainer = () => {
  const [isSideDrawerShow, setIsSideDrawerShow] = useState(false);
  const toolbarHistory = useHistory();

  const handleLogoClick = () => {
    toolbarHistory.push('/');
  };

  const handleShowOrHideDrawerToggleClick = () => {
    setIsSideDrawerShow(!isSideDrawerShow);
  };

  return (
    <Fragment>
      <NavigationBar handleShowOrHideDrawerToggleClick={handleShowOrHideDrawerToggleClick}
                     handleLogoClick={handleLogoClick}/>
      <SideDrawer isSideDrawerShow={isSideDrawerShow}
                  handleLogoClick={handleLogoClick}
                  handleShowOrHideDrawerToggleClick={handleShowOrHideDrawerToggleClick}
      />
    </Fragment>
  )
};

export default ToolbarContainer;
