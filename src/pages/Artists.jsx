import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectAllArtists } from '../features/artists/artistsSlice'

const Artists = () => {
  const { guests } = useSelector(selectAllArtists)

  return (
    <section className="container">
      <h1>Guest Artists</h1>
      <div className="container-works">
        {Object.keys(guests).map((guest, i) => (
          <div className="card" key={i}>
            <Link to={`/artists/${guest}`}>
              <h3>
                {guest
                  .split('-')
                  .map(w => w[0].toUpperCase() + w.slice(1))
                  .join(' ')}
              </h3>
              <img src={guests[guest].works[0]} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Artists
