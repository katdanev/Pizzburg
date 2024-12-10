// Main.jsx
import React from 'react';
import './main/maincontent.css'; // Add css file
import './app/fonts.css'; // Add fonts css

function Main() {
    return (
        <div className="main-page">
            <div className='photoblock'>
                <img src="/pizza1.jpg" alt="pizza" className='pizzaImage' />
                <img src="/pizza2.jpg" alt="pizza" className='pizzaImage' />
                <img src="/pizza3.jpg" alt="pizza" className='pizzaImage' />
            </div>

            <div className='articles-container'>
                <div className='article'>
                    <h1> A Slice of Newfoundland Flavor</h1>

                    <p>Located in the heart of Newfoundland, Pizzburg is a cherished pizzeria that
                        has been serving the community for over two decades. With a commitment to delivering
                        authentic and delectable pizzas, we have become a local favorite, celebrated for our warm
                        hospitality and mouthwatering menu.</p>

                    <div className='restaurantPhoto '>
                        <img src="restaurant.jpg" alt="restaurant"/>
                    </div>

                    <p>At Pizzburg, we take pride in crafting each pizza with care, using only the finest and freshest
                        ingredients to ensure an unforgettable taste. Our pizza artists hand-toss the dough to
                        perfection
                        and generously top it with an array of savory ingredients, guaranteeing a delightful culinary
                        experience in every bite.</p>

                    <p>Beyond our delicious pizzas, we offer a diverse range of Italian-inspired dishes that cater
                        to all taste preferences. From classic pasta dishes to hearty subs and salads, our menu has
                        something for everyone.
                        We value our community deeply and are proud to be a part of the Newfoundland dining scene. With
                        friendly service, cozy
                        ambiance, and a commitment to quality, Pizzburg has earned its place as a local gem.</p>

                    <p>Come join us at Pizzburg, where every slice tells a story of Newfoundland's rich flavors,
                        and every visit feels like coming home.</p>

                    <div className='restaurantPhoto2 '>
                        <img src="restaurant2.jpg" alt="restaurant"/>
                    </div>
                    <p className='last'>Experience the taste of tradition - experience Pizzburg.</p>

                </div>
                <div className='article2'>

                    <div className='block centered-block'>
                        <h4 className='contactInfo'>CONTACT INFO</h4>
                        <p><img src="location.svg" alt="location"/>67 Rowan st. St. John’s A1Y 5R4</p>
                        <p><img src="phone.svg" alt="phone" className='phone'/>709 456 8888 </p>
                    </div>


                    <div className='block centered-block hours'><h4 className='contactInfo'>HOURS</h4>
                        <div>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td/>
                                        <td/>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td/>
                                        <td/>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>11:00</td>
                                        <td>23:00</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>

                    <div className='block review1'>
                        <div className='name-container'>
                            <h5 className='name'>ANNIE</h5>
                            <div className='stars'><img src="/stars.svg" alt="stars"/></div>
                        </div>
                        <div className='rewiew'>
                            <p>"The best pizza I've ever had in Newfoundland! The flavors are
                                incredible, and the crust is perfection.
                                I can't get enough of Pizzburg's delicious creations!"</p>
                        </div>
                    </div>


                    <div className='block review2'>
                        <div className='name-container'>
                            <h5 className='name'>ALEX</h5>
                            <div className='stars'><img src="/stars.svg" alt="stars"/></div>
                        </div>
                        <div className='rewiew'>
                            <p>"I'm so impressed with the quality of ingredients Pizzburg uses. You
                                can really taste
                                the freshness in every bite. The garlic knots are addictive!"</p>
                        </div>
                    </div>


                    <div className='block review3'>
                        <div className='name-container'>
                            <h5 className='name'>TIM</h5>
                            <div className='stars'><img src="/stars.svg" alt="stars"/></div>
                        </div>
                        <div className='rewiew'>
                            <p>"Pizzburg's staff is fantastic! They're friendly and efficient, and
                                they make sure
                                you get exactly what you want. It's not just pizza; it's an experience."</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Main;

