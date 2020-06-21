import React from 'react';
import logo from '../../assets/webp/logo-ig.webp';
import styles from './NavigationBar.module.css';
import NavigationItems from "./NavigationItems";

interface ToolBarProps {
  handleLogoClick: () => void;
  handleShowOrHideDrawerToggleClick: () => void;
}

const NavigationBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
  return (
    <header className={styles.NavigationBar}>
      {/* Untuk Mobile */}
      <div className={styles.DrawerToggle} onClick={props.handleShowOrHideDrawerToggleClick}>
        <div/>
        <div/>
        <div/>
      </div>

      <div className={styles.Logo} onClick={props.handleLogoClick}>
        <img src={logo} alt="alt-ping-logo"/>
      </div>

      {/* Untuk Desktop */}
      <nav className={styles.DesktopOnly}>
        <NavigationItems/>
      </nav>
    </header>
  )
};

export default NavigationBar;
