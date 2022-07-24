import axios from 'axios'

const getArtists = async () => {
  const res = await axios.get(
    'https://raw.githubusercontent.com/frozenborder72/primordial-pain/main/src/data/data.json'
  )

  return res.data
}

const artistsService = {
  getArtists,
}

export default artistsService
