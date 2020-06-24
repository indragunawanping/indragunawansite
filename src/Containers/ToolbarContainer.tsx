import React, { Fragment, useState } from 'react';
import NavigationBar from "../Components/Toolbar/NavigationBar";
import SideDrawer from "../Components/Toolbar/SideDrawer";
import { useHistory } from 'react-router';

const ToolbarContainer = () => {
  const [isSideDrawerShow, setIsSideDrawerShow] = useState(false);
  const toolbarHistory = useHistory();

  const handleLogoClick = () => {
    toolbarHistory.push('/indragunawansite/');
    setIsSideDrawerShow(false);
  };

  const handleShowOrHideDrawerToggleClick = () => {
    setIsSideDrawerShow(!isSideDrawerShow);
  };

  const handleDrawerNavClick = () => {
    setIsSideDrawerShow(false);
  };

  return (
    <Fragment>
      <NavigationBar handleShowOrHideDrawerToggleClick={handleShowOrHideDrawerToggleClick}
                     handleLogoClick={handleLogoClick}/>
      <SideDrawer isSideDrawerShow={isSideDrawerShow}
                  handleLogoClick={handleLogoClick}
                  handleShowOrHideDrawerToggleClick={handleShowOrHideDrawerToggleClick}
                  handleDrawerNavClick={handleDrawerNavClick}
      />
    </Fragment>
  )
};

export default ToolbarContainer;
