import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  )
}

export default App
