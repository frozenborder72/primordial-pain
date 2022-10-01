import { useSelector } from 'react-redux'

import { selectAllArtists } from '../features/artists/artistsSlice'

const Artist = () => {
  const artists = useSelector(selectAllArtists)
  console.log(artists['horibudo-i'])

  return (
    <section className="container">
      <h1>Horibudo I</h1>
      <div className="container-works">
        {artists['horibudo-i'].works.map((work, i) => (
          <div className="card" key={i}>
            <img src={work} alt="Horibudo I" />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Artist
