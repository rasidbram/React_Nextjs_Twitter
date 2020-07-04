import React from 'react'
import cn from 'classnames'
import styles from './col-sidebar.module.css'
import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'

function Sidebar({ flat }) {
  return (
    <div className={cn([styles.colSidebar])}>
      <Navigation flat={flat} />
      <ThemeButton big={true} full={true}>
        Tweet
      </ThemeButton>

      <ProfileBox />
    </div>
  )
}

export default Sidebar
