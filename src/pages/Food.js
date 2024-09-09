import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "./../components/Navbar"
import images from "./../images/Group 2.png"
import Footer from "./../components/Footer";
import "./Food.css";

function Food() {
  return (
    <div className=''>
      <Navbar />
      <div className='container mt-5 food_banner'>
        <div className='row mt-5'>
          <div className='col-md-6 mt-5'>
            <div className=" py-5 ">
              <h1 className="display-6 fw-bold food_text mt-5"> <span>My Name Is</span> Olajumoke</h1>
              <p className="mt-3 mb-5">
                Welcome to my food blog. food & faraway features Nigerian food recipes, health and cooking tips. I hope to inspire other home cooks like myself to make wonderful dishes. Explore, leave a comment if you have any question

                Follow Food&Faraway on instagram for daily tips, tricks and recipes.

                Looking for healthy Nigerian Recipes for weight loss? – Visit Lose It Nigerian.
                A food blog with hundreds of quick and easy recipes. Classics done right, incredible one pot recipes. Asian takeout at home and holiday feasting
              </p>
              <Link to='/' className=" btn mt-5">Explore Recipes</Link>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 mt-5 food_imgfirst'>
            <img src={images} className='img-fluid mt-3' alt='' />
          </div>
        </div>
      </div>

      <div className="container mt-5 most_popular_recipes mb-5">
        <h3 className='fw-bold'>MOST <span className='popular'>POPULAR</span> RECIPES</h3>
        <div className="row">
          <div className="col-md-3">

            <Link className=''>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2020/07/DSC0001hot-dog-buns-.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold' >simple homemade hot dog buns</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2023/08/keto-blueberry-muffins-9-745x1024.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>Keto blueberry muffins</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17-720x1080.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make Jollof rice</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2022/08/DSC_1442-Bbq-Beef-Ribs-720x1080.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>BBQ beef ribs</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2016/05/DSC0187crispy-fried-chicken-legs.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>BBQ beef ribs</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2021/02/DSC0353-Fufu-01292021-west-african-fufu.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>West African fufu</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2024/07/Air-fryer-Catfish-1-640x853.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>Air fryer catfish</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2024/07/Sorghum-3-640x853.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make sorghum</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2020/06/DSC0053jamaican-rice-and-peas-685x1024.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>Jamaican rice and peas</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2023/12/Roasted-Butternut-Squash-1-640x853.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>Roasted butternut squash</Link></h5>
            </Link>
          </div>


          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2022/11/How-to-cook-a-turkey-06-546x728.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>Roasted butternut squash</Link></h5>
            </Link>
          </div>

          <div className="col-md-3">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2023/12/Christmas-punch-1-640x853.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>Roasted butternut squash</Link></h5>
            </Link>
          </div>



        </div>
      </div>

      <div className="container mt-5 mb-5 chicken_recipes">
        <h3 className='fw-bold'>CHICKEN RECIPES</h3>

        <div className="row">
          <div className="col-md-4">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2023/09/White-Bean-Chicken-Chili-02-728x728.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make white bean chicken chili</Link></h5>
            </Link>
          </div>

          <div className="col-md-4">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2024/01/Rasta-Pasta-6-728x728.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make rasta pasta</Link></h5>
            </Link>
          </div>

          <div className="col-md-4">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2024/01/Rasta-Pasta-6-728x728.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make rasta pasta</Link></h5>
            </Link>
          </div>


        </div>
      </div>

      <div className="container mt-5 mb-5 chicken_recipes">
        <h3 className='fw-bold'>CHICKEN RECIPES</h3>

        <div className="row">
          <div className="col-md-4">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2024/07/Air-fryer-Catfish-1-728x728.jpg.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make air fryer catfish</Link></h5>
            </Link>
          </div>

          <div className="col-md-4">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2023/08/Air-Fryer-Popcorn-Chicken-3-728x728.png.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make air fryer catfish</Link></h5>
            </Link>
          </div>

          <div className="col-md-4">
            <Link>
              <img src="https://cheflolaskitchen.com/wp-content/uploads/2023/08/Crispy-Air-Fryer-Brussels-Sprouts-2-728x728.png.webp" alt="" className='img-fluid' />
              <h5><Link className='fw-bold'>How to make air fryer catfish</Link></h5>
            </Link>
          </div>


        </div>
      </div>

      <h3 className='fw-bold text-center'>Lose It Nigerian</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={require("./../images/foodimages/LIN-Flyer-600x776.jpg")} alt="" className='img-fluid' />
          </div>

          <div className="col-md-6">
            <img src={require("./../images/foodimages/LIN-Dress-Down-Cover2-600x472.jpg")} alt="" className='img-fluid' />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Food