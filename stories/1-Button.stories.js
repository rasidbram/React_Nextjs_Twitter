import React from 'react'

import Button from '../components/button'

import NavigationButton from '../components/navigation-button'

import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons'
}

export const button = () => <Button>save</Button>
export const Theme = () => (
  <Stack column={true}>
    <ThemeButton>save</ThemeButton>
    <ThemeButton full={true}>save full</ThemeButton>
    <ThemeButton full={true} big>save full big </ThemeButton>

  </Stack>
)
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <span>Home</span>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="Home" />
