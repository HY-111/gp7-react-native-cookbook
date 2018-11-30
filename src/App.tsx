import React from 'react'
import { Provider } from 'mobx-react'

import Home from './pages/home/Home'
import store from './store'

export default class componentName extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    )
  }

  componentDidMount () {
    store.list.getCateData()
  }
}
