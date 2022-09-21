import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArtists } from '../features/artists/artistsSlice'

const Artists = () => {
  const dispatch = useDispatch()

  const { artists, isLoading, isError } = useSelector(state => state.artists)

  const guests = Object.keys(artists)

  useEffect(() => {
    if (isError) {
      console.error('error')
    }

    dispatch(getArtists())
  }, [isError, dispatch])

  return (
    <section className="container">
      <h1>Guest Artists</h1>
      <div className="container-works">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading data</p>
        ) : (
          guests.map((guest, i) => (
            <div className="card" key={i}>
              <Link to={`/artists/${guest}`}>
                <h3>
                  {guest
                    .split('-')
                    .map(w => w[0].toUpperCase() + w.slice(1))
                    .join(' ')}
                </h3>
                <img
                  src={
                    artists[guest].works[
                      Math.floor(Math.random() * artists[guest].works.length)
                    ]
                  }
                  alt=""
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default Artists
