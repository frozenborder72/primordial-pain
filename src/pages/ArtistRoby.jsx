import data from '../data/data.json'

const Artist = () => {
  const works = data['horibudo-i'].works

  return (
    <section className="container">
      <h1>Horibudo I</h1>
      <div className="container-works">
        {works.map((work, i) => (
          <div className="card" key={i}>
            <img src={work} alt="Horibudo I" />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Artist
