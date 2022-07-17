import React from 'react'

import bgImage from '../assets/f57d3ace87dcc54b23a6354e0ce36926.jpg'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div
          className="home-image"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="home-title">
          <h1 style={{ backgroundImage: `url(${bgImage})` }}>
            Primordial Pain Tattoos
          </h1>
        </div>
      </div>
    </>
  )
}

export default Home
