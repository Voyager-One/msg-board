import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './MainPage'
import configureStore from '../store/configureStore'
const store = configureStore()
it('renders without crashing', () => {
  shallow(<MainPage store={store} />)
})