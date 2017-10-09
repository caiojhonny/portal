
import React from 'react'
import renderer from 'react-test-renderer'
import Landing from './index'

it('Should Landing match to snapshot', () => {
  const tree = renderer.create(<Landing />).toJSON()
  expect(tree).toMatchSnapshot()
})
