import React, { Fragment } from 'react';
import styles from './SideDrawer.module.css';
import logo from '../../assets/webp/logo-ig-v2.webp';
import NavigationItems from "./NavigationItems";

interface SideDrawerProps {
  isSideDrawerShow: boolean;
  handleLogoClick: () => void;
  handleShowOrHideDrawerToggleClick: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = (props: SideDrawerProps) => {
  let attachedClasses = [styles.SideDrawer];
  props.isSideDrawerShow ?
    attachedClasses.push(styles.Open) :
    attachedClasses.push(styles.Close);

  return (
    <Fragment>
      {
        props.isSideDrawerShow?
          <div className={styles.Backdrop} onClick={props.handleShowOrHideDrawerToggleClick}/> : null
      }
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo} onClick={props.handleLogoClick}>
          <img src={logo} alt="alt-ping-logo"/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Fragment>

  )
};

export default SideDrawer;
