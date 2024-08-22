import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "./../components/Navbar"
import "./Details.css"

function Details() {

    const { id } = useParams()

    return (
        <div className=''>
            <Navbar />
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-10 mt-5">
                        <h2 className='fw-bold'>Jollof Rice</h2>
                        <h6 className='text-danger fw-bold'>By: Rafiu Olajumoke</h6>
                        <hr />

                        <p><span className='fw-bold'>Jollof Rice:</span> I can’t think of a more popular West African dish than Jollof rice. It’s popular for good reason — it is delicious!
                            Jollof rice is a staple in West African cuisine. It’s made from rice, tomatoes, onions, peppers, and other seasonings. The dish is cooked in one pot. It’s simple and easy to make at home—and the end result is absolutely delicious!
                        </p>

                        <div>
                            <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17-720x1080.jpg.webp" alt=""  />
                        </div>

                        <h3 className='fw-bold mt-3 mb-3'>Jollof Rice Recipe</h3>

                        <p className='details_second'>There are hundreds of different dishes in the world, but there is only a handful that has enough flavor for me to eat alone. A bowl of Jollof rice is one of those dishes. You know, the kind where you can taste the spoon or fork after you’re done with the food? I mean, you’d want to lick it clean. Jollof is deliciously addictive.
                            Jollof rice is a staple in West African cuisine. It’s made from rice, tomatoes, onions, peppers, and other seasonings. The dish is cooked in one pot. It’s simple and easy to make at home—and the end result is absolutely delicious!
                        </p>

                        <div>
                            <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-23-720x1080.jpg.webp" alt="" className='img-fluid'/>
                        </div>

                        <h3 className='fw-bold mt-3 mb-3'>What is Jollof rice?</h3>
                        <p>
                            For those of you who aren’t familiar with Jollof Rice (Jellof rice) —it is a rich and incredibly rich, aromatic, tasty West African one-pot Meal. It’s similar to Jambalaya but with distinctive African spices. It consists mainly of cooked rice and tomato stew flavored with spices such as thyme, scotch bonnet pepper, onions, and garlic.

                            The dish is a staple of West African cuisine, particularly that of Ghana, Nigeria, Senegal, and Gambia often eaten and enjoyed during holidays, weddings, birthdays, and other special events.

                            It is a very versatile dish, and it is usually made from scratch using rice, tomatoes, pimento peppers, tomato paste, scotch bonnet, onions, salt, and other spices.
                        </p>

                        <h3 className='fw-bold mt-3 mb-3'>Versatile!</h3>
                        <p>This recipe for jollof rice can be customized in many ways to suit your tastes and preferences, you could add any of your favorite vegetables (diced carrots, green beans, sweet peas, or sweet corn). It can be enjoyed with chicken, beef, lamb meat, goat meat, or fish. I love pairing mine with some fried Plantains, coleslaw, and baked chicken!
                        </p>

                        <div>
                            <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/12/cropped-DSC0075Jollof-rice-720x1080.jpg.webp" alt="" className='img-fluid'/>
                        </div>

                        <h3 className='fw-bold mt-3 mb-3'>How To Cook Jollof Rice</h3>

                        <div className="how_to_cook">
                            <p className='mb-3'>When cooking Jollof rice, building a flavor base is very important. Don’t be in haste to dump your ingredients in the pot otherwise, you will end up with what we call a ”concoction.” Each step counts, so try to do each of the steps in detail.</p>
                            <ul>
                                <li className='mb-3'>
                                    The inevitable foundation for building up the flavor in this meal is to start by sauteeing the Onions. This should take about 3 to 5 minutes. The next thing is to stir in the tomato paste. This adds a deep and rich tomato flavor; I simply fry this for another 5 minutes or thereabout
                                </li>

                                <li className='mb-3'>
                                    Add the ginger and garlic and cook along with the tomato paste for another two minutes; Actually, by the time this is ready, you will notice it in the smell. If you keep it cooking any longer, you might risk burning them.
                                </li>
                               
                               <li className='mb-3'>
                                 Add the blended peppers. Usually, there is no particular time frame for frying this pepper. I often stop when the sauce becomes really thick, and the oil literally floats on top of the sauce. At this point, most of the water is gone, and the sauce no longer smells raw. Trust me, you will know, but just in case you are still in doubt, I would say maybe 15 to 20 minutes depending on the quantity of water in your blended pepper.
                               </li>

                               <li className='mb-3'>
                                  Finally, in building my flavor, I add the thyme, curry powder, salt, white pepper (good but optional), and seasoning cubes. Adjust the seasoning at this point if there is a need to.
                               </li>

                               <li className='mb-3'>
                                    Once the flavor is on point, then, I stir in the Rice. Make sure you stir the rice properly until you cover each grain of rice with the sauce.
                               </li>

                               <li className='mb-3'>
                                 Now add the chicken stock. Give it a brief stir and cover it up with a tight-fitting lid. If your lid is not fitting enough, simply cover the rice with foil paper before covering it with the lid. This is because Jollof needs a lot of steam in order to turn out well.
                               </li>

                               <li>
                                 Once the rice comes to a boil, reduce the heat to medium-low immediately and continue to cook until the rice is done, about 20 to 30 minutes.
                               </li>

                               <li>
                                 Serve with Fried Chicken, Spicy Grilled Chicken, Grilled Tilapia Fish, or Gizzards and plantains.
                               </li>
                            </ul>
                        </div>

                        <div>
                            <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-55-683x1024.jpg.webp" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details