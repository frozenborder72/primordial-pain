import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Artist = () => {
  const { artist } = useParams()
  const works = useSelector(state => state.works.works[artist])

  return (
    <h1>{artist}</h1>
    // <section className="container">
    //   <h1>
    //     {artist
    //       .split('-')
    //       .map(w => w[0].toUpperCase() + w.slice(1))
    //       .join(' ')}
    //   </h1>
    //   <div className="container-works">
    //     {works.map(({ title, subtitle, medium, imageUrl, dimensions }, i) => (
    //       <div className="card" key={i}>
    //         <h3>
    //           {title} <span className="subtitle">{subtitle}</span>
    //         </h3>
    //         <img src={imageUrl} alt={title} />
    //         <p>
    //           {medium}
    //           <br />
    //           {dimensions}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  )
}
export default Artist
