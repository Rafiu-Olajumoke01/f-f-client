import React from 'react'
import image1 from "./../images/travelandfood.jpg"
import "./Banner.css";
import { Link } from 'react-router-dom';


function Banner() {
  return (
    <div>
      <div className="container mt-5 banner_all mb-5">
        <div className="row mt-5 mb-5 banner_row">
          <div className="col-md-6 mt-5 ">
            <h1 className='first_text mt-5 fw-bold'>Multipurpose Blog</h1>
            <p className='mb-5 mt-3'>Welcome to Food and Faraway, a culinary journey that takes you on a path of discovery, exploration, and delight. This blog is a fusion of my two greatest passions: food and travel. Here, I share my adventures, experiences, and stories from the world of cuisine and exploration.

              But Food and Faraway is more than just a food and travel blog. It's a space for storytelling, reflection, and connection. It's a place where I share my thoughts on food culture, sustainability, and the power of food to bring people together.

              Through my stories, recipes, and photos, I hope to inspire you to embark on your own culinary journeys, whether that's trying new ingredients, cooking techniques, or destinations.

              So come along with me on this delicious journey, and let's explore the world, one bite at a time.
            </p>

            <div className="main-btn mt-5">
              <Link to="/food" className="btn">Expolre Food</Link>
              <Link to="travel" className="btn btn2">Explore Travel</Link>
            </div>

          </div>

          <div className="col-md-6 mt-3">
            <img src="https://img.freepik.com/free-photo/delicious-burgers-us-labor-day_23-2150378697.jpg?ga=GA1.1.1862932586.1721573627&semt=ais_hybrid" alt="" className='banner_img mt-5'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner