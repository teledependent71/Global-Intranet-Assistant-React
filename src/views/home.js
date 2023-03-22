import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Intranet Assistant</title>
        <meta property="og:title" content="Global Intranet Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
