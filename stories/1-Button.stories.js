import React from 'react'

import Button from '../components/button'

import NavigationButton from '../components/navigation-button'

import Navigation from '../components/navigation'
import {Home} from '../components/icons'

export default {
  title: 'Buttons'
}

export const button = () => <Button>save</Button>

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <span>Home</span>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="Home" />
