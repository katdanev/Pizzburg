// Menu.jsx
import React, { useState } from 'react';
import './menu/menu.css';
import Button from "./menu/menubutton.jsx";


function Menu() {

    const imgStyle = {
        width: '250px',
        height: '250px',
    };

    return (
        <div className={"menu-page"}>
            <div className = "intro-container">
                <h1 className = "menu-header">Our Menu</h1>
                <p className = "menu-intro">
                    At Pizzburg, you'll find a delectable array of pizzas, appetizers that tease your
                    taste buds, subs that satisfy, and desserts that delight. Check out all our items
                    and descriptions to see what will satify your tastebuds today!
                </p>
            </div>

            {/* Appetizer Section */}
            <h1 className = "menu-header">Appetizers</h1>
            <div className = "menu-sections">
                <figure>
                    <img
                        src= {"./images/GarlicBread.png"}
                        alt="Garlic Bread"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Garlic Bread"
                            content={
                                <div>
                                    <img src={"./images/GarlicBread.png"} style = {imgStyle} alt="Garlic Bread" />
                                    <h2>Garlic Bread</h2>
                                    <p>Savor the irresistible allure of our Garlic Bread,
                                        where slices of freshly baked French baguette are toasted
                                        to a perfect crisp and generously adorned with our secret
                                        recipe garlic butter. As you bite into each piece, the harmonious
                                        blend of roasted garlic and creamy butter unfolds, creating
                                        a mouthwatering symphony of flavors. Sprinkled with fragrant
                                        parsley leaves, this culinary masterpiece promises to elevate
                                        your dining experience, whether enjoyed as a standalone delight
                                        or paired with your favorite main course. Prepare to be transported
                                        to a world of buttery garlic ecstasy, leaving your taste buds
                                        craving for more.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/Salad.png"}
                        alt="Salad"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Salads"
                            content={
                                <div>
                                    <img src={"./images/Salad.png"} style = {imgStyle} alt="Salad" />
                                    <h2>Salads</h2>
                                    <p>Explore a garden of flavor options with our Chef's Garden Medley Salad.
                                        From the classic allure of a Caesar salad with its creamy dressing and
                                        savory croutons to the hearty richness of our Chef Salad, bursting with
                                        turkey, ham, cheeses, and more, and the Mediterranean escape of our
                                        Antipasto Salad featuring marinated olives and Italian cold cuts, there's
                                        a choice for every craving. If simplicity is your preference, the Garden
                                        Salad offers a refreshing mix of greens and vegetables. Whichever path
                                        you choose, our Chef's Garden Medley Salad is a journey through fresh,
                                        vibrant ingredients that cater to every palate and promise a symphony of
                                        tastes to delight your senses.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/FriedRavioli.png"}
                        alt="Fried Ravioli"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Fried Ravioli"
                            content={
                                <div>
                                    <img src={"./images/FriedRavioli.png"} style = {imgStyle} alt="Fried Ravioli" />
                                    <h2>Fried Ravioli</h2>
                                    <p>Dive into a world of indulgence with our Crispy Fried Ravioli,
                                        where traditional Italian fare meets a tantalizing twist. Delicate
                                        pockets of freshly made ravioli are carefully coated in a golden,
                                        seasoned breadcrumb crust, then fried to perfection, resulting
                                        in a delectable fusion of textures - a crisp, outer crunch giving
                                        way to the tender, cheesy embrace within. Served alongside a luscious
                                        marinara dipping sauce, every bite is a harmonious blend of rich,
                                        creamy ricotta and savory Parmesan, kissed by the seductive allure
                                        of deep-fried perfection. An appetizer that's both comforting and
                                        crave-worthy, our Crispy Fried Ravioli is a symphony of flavors that
                                        promises to elevate your dining experience to a whole new level.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>
            </div>


            {/* Pizza Section */}
            <h1 className = "menu-header">Specialty Pizzas</h1>
            <div className = "menu-sections">
                <figure>
                    <img
                        src= {"./images/Margherita.png"}
                        alt="Margherita"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Margherita"
                            content={
                                <div>
                                    <img src={"./images/Margherita.png"} style = {imgStyle} alt="Margherita" />
                                    <h2>Margherita</h2>
                                    <p>Transport your taste buds to the heart of Italy with our classic
                                        Margherita Pizza. Crafted with love and authenticity, this masterpiece
                                        starts with a hand-stretched, thin-crust pizza dough, expertly baked to
                                        achieve the ideal balance of crispy and chewy. It's then generously
                                        adorned with vibrant, sun-ripened tomatoes, sliced fresh mozzarella cheese,
                                        and fragrant basil leaves, creating a trio of colors that pays homage to
                                        the Italian flag. The finishing touch is a drizzle of extra-virgin olive
                                        oil, enhancing the rich, savory flavor of the tomato and the creamy,
                                        melt-in-your-mouth mozzarella. Each bite of our Margherita Pizza is a taste
                                        of pure simplicity and culinary perfection, an ode to the true essence of
                                        Italian cuisine, and an experience that will linger in your memory long
                                        after the last slice has disappeared.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/ItalianHarvest.png"}
                        alt="Italian Harvest"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Italian Harvest"
                            content={
                                <div>
                                    <img src={"./images/ItalianHarvest.png"} style = {imgStyle} alt="Italian Harvest" />
                                    <h2>Italian Harvest</h2>
                                    <p>Embark on a flavorful journey through the bountiful fields of Italy
                                        with our Italian Harvest Pizza. This rustic masterpiece boasts a
                                        handcrafted, golden crust that's both crispy and tender, providing the
                                        perfect canvas for a symphony of tastes. Generous portions of savory
                                        sausage, briny olives, roasted peppers, and earthy mushrooms create
                                        a vibrant mosaic of colors and flavors, reminiscent of an Italian
                                        countryside harvest. Baked to perfection and crowned with a delicate
                                        dusting of Parmesan cheese, this pizza is a mouthwatering tribute to the
                                        diverse and robust flavors of Italy, offering a slice of Mediterranean
                                        charm in every bite.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/SicilianSunshine.png"}
                        alt="Sicilian Sunshine"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Sicilian Sunshine"
                            content={
                                <div>
                                    <img src={"./images/SicilianSunshine.png"} style = {imgStyle} alt="Sicilian Sunshine" />
                                    <h2>Sicilian Sunshine</h2>
                                    <p>Let the warmth of the Mediterranean sun grace your taste buds with our
                                        Sicilian Sunshine Pizza. This culinary masterpiece features a canvas of
                                        velvety white sauce, elegantly enhancing a handcrafted, golden crust.
                                        Delicate layers of fresh spinach, succulent tomatoes, and briny olives are
                                        artfully arranged, evoking the essence of Sicily's lush landscapes. As this
                                        pizza emerges from the oven, it radiates a vibrant glow, inviting you to
                                        savor the harmonious blend of flavors. With every bite, you'll be
                                        transported to the sun-kissed shores of the Mediterranean, where the
                                        bright and refreshing notes of this pizza bring the Sicilian sunshine to
                                        your plate.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/Hawaiian.png"}
                        alt="Hawaiian Paradise"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Hawaiian Paradise"
                            content={
                                <div>
                                    <img src={"./images/Hawaiian.png"} style = {imgStyle} alt="Hawaiian Paradise" />
                                    <h2>Hawaiian Paradise</h2>
                                    <p>Let the warmth of the Mediterranean sun grace your taste buds with our
                                        Sicilian Sunshine Pizza. This culinary masterpiece features a canvas of
                                        velvety white sauce, elegantly enhancing a handcrafted, golden crust.
                                        Delicate layers of fresh spinach, succulent tomatoes, and briny olives are
                                        artfully arranged, evoking the essence of Sicily's lush landscapes. As this
                                        pizza emerges from the oven, it radiates a vibrant glow, inviting you to
                                        savor the harmonious blend of flavors. With every bite, you'll be
                                        transported to the sun-kissed shores of the Mediterranean, where the
                                        bright and refreshing notes of this pizza bring the Sicilian sunshine to
                                        your plate.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/BBQChicken.png"}
                        alt="Barcelona BBQ Bliss"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Barcelona BBQ Bliss"
                            content={
                                <div>
                                    <img src={"./images/BBQChicken.png"} style = {imgStyle} alt="Barcelona BBQ Bliss" />
                                    <h2>Barcelona BBQ Bliss</h2>
                                    <p> Experience a culinary journey like no other with our Barcelona BBQ
                                        Bliss Pizza. Crafted on a hand-stretched, golden crust, this delightful
                                        masterpiece begins with a smoky barbecue sauce that sets the stage for
                                        a mesmerizing blend of flavors. Succulent pieces of tender, barbecued
                                        chicken harmonize with the sweet crunch of onions, and fresh basil leaves
                                        add a fragrant, herbaceous note. A generous covering of rich, melted
                                        shredded cheese crowns the creation, creating a symphony of textures and
                                        tastes that dance across your palate. Each bite is an exploration of
                                        culinary delight, whisking you away to the vibrant streets of Barcelona,
                                        where the Barcelona BBQ Bliss Pizza becomes your passport to a world of
                                        savory satisfaction.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src = {"./images/Pepperoni.png"}
                        alt = "Rome's Pepperoni Pleaser"
                        style = {imgStyle}
                        className = "menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Rome's Pepperoni Pleaser"
                            content={
                                <div>
                                    <img src={"./images/Pepperoni.png"} style = {imgStyle} alt="Rome's Pepperoni Pleaser" />
                                    <h2>Rome's Pepperoni Pleaser</h2>
                                    <p>Discover the timeless delight of our Rome's Pepperoni Pizza Pleaser,
                                        a classic slice of Italy that never goes out of style. On our perfectly
                                        baked golden crust, a flavorful tomato sauce provides the backdrop for a
                                        generous layer of mouthwatering pepperoni, crisped to perfection, and
                                        adorned with a blend of melted cheeses that adds an irresistible creaminess
                                        to every bite. But the journey doesn't stop there - tailor this masterpiece
                                        to your heart's content by adding your favorite toppings, from fresh veggies
                                        to extra cheese, creating a personalized pizza that will satisfy your
                                        cravings and transport you to the heart of Rome, one bite at a time.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>
            </div>


            {/* Sub Sections */}
            <h1 className = "menu-header">Subs</h1>
            <div className = "menu-sections">
                <figure>
                    <img
                        src= {"./images/MeatballSub.png"}
                        alt="Little Italy Meatball"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Little Italy Meatball"
                            content={
                                <div>
                                    <img src={"./images/MeatballSub.png"} style = {imgStyle} alt="Little Italy Meatball" />
                                    <h2>Little Italy Meatball</h2>
                                    <p>Transport your taste buds to the charming streets of Little Italy with
                                        our iconic Little Italy Meatball Sub. Crafted with love and tradition,
                                        this delectable masterpiece features plump and juicy meatballs made from
                                        a cherished family recipe, lovingly simmered in a rich marinara sauce until
                                        they reach perfection. Nestled inside a fresh, crusty Italian roll, these
                                        succulent meatballs are crowned with a generous layer of melted mozzarella
                                        cheese that adds a touch of creamy indulgence to every bite. As you savor
                                        this culinary experience, you'll find yourself reminiscing about the
                                        enchanting flavors of Italy, where the Little Italy Meatball Sub is a
                                        mouthwatering testament to the authenticity of this cherished classic.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/ItalianSub.png"}
                        alt="Bologna's Bold Italian"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Bologna's Bold Italian"
                            content={
                                <div>
                                    <img src={"./images/ItalianSub.png"} style = {imgStyle} alt="Bologna's Bold Italian" />
                                    <h2>Bologna's Bold Italian</h2>
                                    <p>Immerse yourself in the bold, authentic flavors of Italy with our Bologna's
                                        Bold Italian Sub. Crafted with the utmost care, this masterpiece features
                                        layers of flavorful Italian cold cuts, including savory salami, rich
                                        mortadella, and spicy capicola, harmonizing in perfect symphony. Nestled
                                        within a fresh, crusty Italian roll, these premium meats are artfully paired
                                        with fresh, crisp lettuce, ripe tomatoes, and the zesty kick of banana
                                        peppers. The final flourish is a drizzle of tangy Italian dressing that
                                        ties it all together. Every bite of this sub is a journey through Italy,
                                        where the Bologna's Bold Italian Sub captures the spirit and essence of
                                        Italian flavors, providing an unforgettable taste of the Mediterranean.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/FetaSub.png"}
                        alt="Mikonos Feta and Chicken Sub"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Mikonos Feta and Chicken Sub"
                            content={
                                <div>
                                    <img src={"./images/FetaSub.png"} style = {imgStyle} alt="Mikonos Feta and Chicken Sub" />
                                    <h2>Mikonos Feta and Chicken Sub</h2>
                                    <p>Embark on a Mediterranean escape with our Mykonos Feta and Chicken Sub,
                                        a mouthwatering fusion of flavors that transports your senses to the
                                        sun-drenched shores of Greece. Tender, grilled chicken breast is generously
                                        topped with crumbled feta cheese, creating a symphony of savory and tangy
                                        notes that dance across your palate. Fresh cucumbers and juicy tomatoes
                                        provide a refreshing crunch, while a drizzle of Greek dressing adds the
                                        perfect balance of zest. All of these delectable ingredients are lovingly
                                        nestled within a warm, soft sub roll, creating a harmonious blend of tastes
                                        that is a true homage to the flavors of Mykonos. With every bite, the
                                        Mykonos Feta and Chicken Sub promises a delightful journey through the heart
                                        of the Mediterranean, an unforgettable taste of Greece in each and every
                                        mouthful.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>
            </div>


            {/* Dessert Section */}
            <h1 className = "menu-header">Desserts</h1>
            <div className = "menu-sections">
                <figure>
                    <img
                        src= {"./images/Cannoli.png"}
                        alt="Florentine Chocolate Cannoli"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Florentine Chocolate Cannoli"
                            content={
                                <div>
                                    <img src={"./images/Cannoli.png"} style = {imgStyle} alt="Florentine Chocolate Cannoli" />
                                    <h2>Florentine Chocolate Cannoli</h2>
                                    <p>Experience the epitome of sweet indulgence with our Florentine Chocolate
                                        Cannoli. This Italian classic is reimagined with a decadent twist, featuring
                                        a delicate, flaky pastry shell that boasts a perfect balance of crispness
                                        and tenderness. The luscious filling inside is a velvety blend of rich,
                                        chocolate-infused mascarpone, expertly crafted to deliver an irresistible
                                        creamy texture and an exquisite cocoa flavor that dances on your taste buds.
                                        To complete the experience, each cannoli is adorned with a sprinkling of
                                        finely grated dark chocolate and a dusting of powdered sugar, creating a
                                        masterpiece that's as visually stunning as it is sumptuously delicious. The
                                        Florentine Chocolate Cannoli is the perfect way to conclude your meal or
                                        satisfy your sweet cravings, offering a taste of Italy's culinary excellence
                                        in every delightful bite.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/PannaCotta.png"}
                        alt="Naples Panna Cotta"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Naples Panna Cotta"
                            content={
                                <div>
                                    <img src={"./images/PannaCotta.png"} style = {imgStyle} alt="Naples Panna Cotta" />
                                    <h2>Naples Panna Cotta</h2>
                                    <p>Savor the delicate elegance of our Naples Panna Cotta, a timeless Italian
                                        dessert that captures the essence of indulgence. Our panna cotta is expertly
                                        crafted, delivering a luxuriously smooth and velvety texture that melts in
                                        your mouth. The gentle sweetness of the vanilla-infused cream base is a
                                        soothing prelude to a world of possibilities, as you can choose to crown this
                                        exquisite dessert with a drizzle of rich chocolate, a luscious caramel
                                        cascade, or a burst of vibrant strawberry topping. Whichever option you
                                        select, the Naples Panna Cotta is a testament to the finesse of Italian
                                        culinary tradition, providing a harmonious blend of flavors that's as
                                        versatile as it is irresistible, making it the perfect finale to your dining
                                        experience.</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>

                <figure>
                    <img
                        src= {"./images/Tiramisu.png"}
                        alt="Venetian Tiramisu Temptation"
                        style={imgStyle}
                        className="menu-img"
                    />
                    <figcaption>
                        <Button
                            buttonText= "Venetian Tiramisu Temptation"
                            content={
                                <div>
                                    <img src={"./images/Tiramisu.png"} style = {imgStyle} alt="Venetian Tiramisu Temptation" />
                                    <h2>Venetian Tiramisu Temptation</h2>
                                    <p>Immerse your senses in the allure of Italy with our Venetian Tiramisu
                                        Temptation, a seductive delight that embodies the essence of Italian
                                        sophistication. This classic dessert is a decadent symphony of layers,
                                        featuring delicate ladyfingers soaked in a harmonious blend of espresso
                                        and coffee liqueur, seamlessly layered with a mascarpone cheese mixture
                                        that's kissed by the subtle sweetness of cocoa. With each heavenly bite,
                                        you'll experience the perfect balance of textures and flavors that has made
                                        tiramisu a world-famous delicacy. Our Venetian Tiramisu Temptation is a
                                        portal to the romantic canals and captivating culture of Venice, capturing
                                        the spirit of Italy in a dessert that's nothing short of a delectable
                                        masterpiece</p>
                                </div>
                            }
                        />
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Menu;
