import { useParams } from 'react-router-dom'
import data from '../data/data.json'

const Artist = () => {
  const { artist } = useParams()

  const works = data.guests[artist].works

  return (
    <section className="container">
      <h1>
        {artist
          .split('-')
          .map(w => w[0].toUpperCase() + w.slice(1))
          .join(' ')}
      </h1>
      <div className="container-works">
        {works.map((work, i) => (
          <div className="card" key={i}>
            <img src={work} alt={artist} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Artist
