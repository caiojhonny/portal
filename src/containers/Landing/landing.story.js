import { storiesOf } from '@storybook/react'
import React from 'react'
import Landing from './index'

const stories = storiesOf('Landing', module)

stories.add('Landing temp page', () => (
  <Landing />
))
