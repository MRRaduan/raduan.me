import React from 'react'
import { StoryFn } from '@storybook/csf'
import GlobalStyles from '../src/styles/global'

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles/>
    {storyFn()}
  </>
)

export default withGlobalStyles