import bookImg from '../assets/4_post.webp'

const Book = () => {
  return (
    <section className="container container-book">
      <h1>
        Horitoshi I<br />
        Storia dell'Irezumi
      </h1>

      <img src={bookImg} alt="" />

      <div class="video-container">
        <iframe
          class="youtube-video"
          src="https://www.youtube-nocookie.com/embed/TPlGZYP8FEY?autoplay=1&amp;color=white&amp;modestbranding=1&amp;rel=0"
          title="Video Player"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default Book
