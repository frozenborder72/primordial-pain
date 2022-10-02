import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import artistsReducer from '../features/artists/artistsSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, artistsReducer)

export const store = configureStore({
  reducer: {
    artists: persistedReducer,
  },
})

export const persistor = persistStore(store)
