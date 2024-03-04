import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fitting Complex Newt</title>
        <meta property="og:title" content="Fitting Complex Newt" />
      </Helmet>
      <div className="home-container1">
        <img
          alt="image"
          src="https://i.imgur.com/Njav8uF.png"
          loading="lazy"
          className="home-image"
        />
      </div>
      <div className="home-container2">
        <span className="home-text">Kommer snart...</span>
        <span className="home-text1">
          En app för att koppla ihop Helsingborg.
        </span>
      </div>
      <div className="home-container3">
        <a
          href="https://apps.apple.com/us/app/helsingbond/id6477622272"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          <img
            alt="pastedImage"
            src="/external/pastedimage-iv7f-200w.png"
            className="home-pasted-image"
          />
        </a>
        <img
          alt="pastedImage"
          src="https://i.imgur.com/1lOv4fK.png"
          className="home-pasted-image1"
        />
      </div>
    </div>
  )
}

export default Home
