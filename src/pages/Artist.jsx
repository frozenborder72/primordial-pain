import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectAllArtists } from '../features/artists/artistsSlice'

const Artist = () => {
  const { guests } = useSelector(selectAllArtists)

  const { artist } = useParams()

  console.log(guests[artist])

  return (
    <section className="container">
      <h1>
        {artist
          .split('-')
          .map(w => w[0].toUpperCase() + w.slice(1))
          .join(' ')}
      </h1>
      <div className="container-works">
        {guests[artist].works.map((work, i) => (
          <div className="card" key={i}>
            <img src={work} alt={artist} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Artist
