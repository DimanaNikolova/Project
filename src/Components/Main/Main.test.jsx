import React from 'react'
import renderer from 'react-test-renderer'
import Main from './Main'
import TestingEnvironment from '../../utils/router-test'

jest.mock('../Header/Header.jsx', () => 'Header');
jest.mock('../Footer/Footer.jsx', () => 'Footer');

describe('Main Component', () => {
  it('should render main component', () => {
    
    const tree = renderer.create(
      <TestingEnvironment value={{
        user: true
      }}>
        <Main />
      </TestingEnvironment>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})