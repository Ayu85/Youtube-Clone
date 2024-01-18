import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import { Provider } from 'react-redux'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import LiveVideosPage from './components/LiveVideoPage'
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Body />,

  },
  {
    path: '/watch',
    element: <WatchPage />
  },
  {
    path: '/watch/live',
    element: <LiveVideosPage />
  }
])
function App() {

  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRoute} />
      <Outlet />
    </Provider>
  )
}

export default App
