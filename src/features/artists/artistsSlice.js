import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import artistsService from './artistsService'

const initialState = {
  artists: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getArtists = createAsyncThunk('artists/getAll', async () => {
  try {
    return await artistsService.getArtists()
  } catch (error) {
    console.error(error)
  }
})

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArtists.pending, state => {
        state.isLoading = true
      })
      .addCase(getArtists.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.artists = action.payload
      })
      .addCase(getArtists.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export default artistsSlice.reducer
