import React from 'react';

import NavigationButton from './navigation-button';
// import span from './title-bold';

import styles from './navigation.module.css';
import {
  Bookmark,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notification,
  Profile,
  Twitter
} from './icons'

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'Home'}>
        <Home />
        <span>Home</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'Explore'}>
        <Explore />
        <span>Explore</span>
      </NavigationButton>

      <NavigationButton notify={17} selected={selectedKey === 'Notification'}>
        <Notification />
        <span>Notification</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'Messages'}>
        <Messages />
        <span>Messages</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'Bookmark'}>
        <Bookmark />
        <span>Bookmark</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'Lists'}>
        <Lists />
        <span>Lists</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'Profile'}>
        <Profile />
        <span>Profile</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'More'}>
        <More />
        <span>More</span>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
