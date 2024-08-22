import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./../components/Navbar"
import "./About.css"

function About() {
  return (
    <div className=''>
      <Navbar />

      <div className="container mt-5 About">
        <div className="row mt-5">
          <div className="col mt-5">
            <hr />
            <h1 className='about_text fw-bold'>Welcome to Food & Faraway</h1>
            <div className='line'></div>
            <h5 className='mt-5 fullinformation'>I'm Rafiu Olajumoke, a food enthusiast and travel aficionado. With a background in culinary arts and passion
              for exploring new cultures, I created this blog to share my gastronomic adventures and travel experiences.
              Expect mouth-watering recipes, honest restaurantreviews, and inspiring stories from around the world.
              Follow me on social media for behind-the-scenes peeks and insider tips.
            </h5>

            <h5 className='support'>Find out ways you can support <Link>Food and Faraway</Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About