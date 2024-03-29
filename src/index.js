import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import { getArtists } from './features/artists/artistsSlice'
import App from './App'
import './styles/main.scss'

store.dispatch(getArtists())

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
