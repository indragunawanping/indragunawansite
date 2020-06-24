import React, { Fragment } from 'react';
import styles from './SideDrawer.module.css';
import logo from '../../assets/webp/logo-ig-v3.webp';
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
        props.isSideDrawerShow ?
          <div className={styles.Backdrop} onClick={props.handleShowOrHideDrawerToggleClick}/> : null
      }
      <div className={attachedClasses.join(' ')}>
        <img className={styles.Logo} onClick={props.handleLogoClick} src={logo} alt="alt-ping-logo"/>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Fragment>

  )
};

export default SideDrawer;
