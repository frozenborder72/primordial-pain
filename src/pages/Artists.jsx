// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import data from '../data/data.json'

const Artists = () => {
  // const dispatch = useDispatch()

  // const { artists, isLoading, isError } = useSelector(state => state)

  // const guests = Object.keys(guests)

  // useEffect(() => {
  //   if (isError) {
  //     console.error('error')
  //   }

  //   dispatch(getArtists())
  // }, [isError, dispatch])

  return (
    <section className="container">
      <h1>Guest Artists</h1>
      <div className="container-works">
        {/* {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading data</p>
        ) : ( */}
        {Object.keys(data.guests).map((guest, i) => (
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
                  data.guests[guest].works[
                    Math.floor(Math.random() * data.guests[guest].works.length)
                  ]
                }
                alt=""
              />
            </Link>
          </div>
        ))}{' '}
        {/* } */}
      </div>
    </section>
  )
}

export default Artists
