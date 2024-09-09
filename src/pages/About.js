import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./../components/Navbar"
import Footer from '../components/Footer'
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

      <div className="container about_img">
        <div className="row">
          <div className="col-md-6">
            <img src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg" alt="" className='img-fluid' />

            <h3 className='about_h3 fw-bold'>OLAJUMOKE</h3>

            <p className='about_p'>Lead Content Creator</p>

            <h5 className='about_h5'>I'm Olajumoke, a fullstack developer and lead content creator for Food and Faraway.

              I hope you enjoy reading articles here as much as i do writing them! Feel free to contact me via email using the

              <Link className='mt-3 mb-5'>Contact from here</Link>
            </h5>

          </div>

          <div className="col-md-6">
            <img src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg" alt="" className='img-fluid' />

            <h3 className='about_h3 fw-bold'>LASOP</h3>

            <p className='about_p'>Lead Content Creator</p>

            <h5 className='about_h5'>I'm Olajumoke, a fullstack developer and lead content creator for Food and Faraway.

              I hope you enjoy reading articles here as much as i do writing them! Feel free to contact me via email using the

              <Link className='mt-3 mb-5'>Contact from here</Link>
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About