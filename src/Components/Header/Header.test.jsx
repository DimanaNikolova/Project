import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import TestingEnvironment from '../../utils/router-test'

describe('Header Component', () => {
  it('should render authenticated routes', () => {
    const tree = renderer.create(
      <TestingEnvironment value={{
        user: true
      }}>
        <Header />
      </TestingEnvironment>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render unauthenticated routes', () => {
    const tree = renderer.create(
      <TestingEnvironment value={{
        user: false
      }}>
        <Header />
      </TestingEnvironment>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})