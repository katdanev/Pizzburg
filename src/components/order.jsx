// Order.jsx
import React from 'react';
import OrderOptions from "./order/OrderOptions";
import OrderInstructions from "./order/OrderInstructions";
import OrderSeperator from "./order/OrderSeperator";

const Appetizers = [
    {
        title: "Garlic Bread",
        image: "images/GarlicBread.png",
        price: 99.99
    },
    {
        title: "Salads",
        image: "images/Salad.png",
        price: 99.99
    },
    {
        title: "Fried Ravioli",
        image: "images/FriedRavioli.png",
        price: 99.99
    },
]

const SpecialtyPizzas = [
    {
        title: "Margherita",
        image: "images/Margherita.png",
        price: 99.99
    },
    {
        title: "Italian Harvest",
        image: "images/ItalianHarvest.png",
        price: 99.99
    },
    {
        title: "Sicilian Sunshine",
        image: "images/SicilianSunshine.png",
        price: 99.99
    },
    {
        title: "Hawaiian Paradise",
        image: "images/Hawaiian.png",
        price: 99.99
    },
    {
        title: "Barcelona BBQ Bliss",
        image: "images/BBQChicken.png",
        price: 99.99
    },
    {
        title: "Rome's Pepperoni Pleaser",
        image: "images/Pepperoni.png",
        price: 99.99
    },
]

const Subs = [
    {
        title: "Little Italy Meatball",
        image: "images/MeatballSub.png",
        price: 99.99
    },
    {
        title: "Bologna's Bold Italian",
        image: "images/ItalianSub.png",
        price: 99.99
    },
    {
        title: "Mikonos Feta and Chicken Sub",
        image: "images/FetaSub.png",
        price: 99.99
    },
]

const Desserts = [
    {
        title: "Florentine Chocolate Cannoli",
        image: "images/Cannoli.png",
        price: 99.99
    },
    {
        title: "Naples Panna Cotta",
        image: "images/PannaCotta.png",
        price: 99.99
    },
    {
        title: "Venetian Tiramisu Temptation",
        image: "images/Tiramisu.png",
        price: 99.99
    },
]


function Order() {
    return (
        <div className={"page"}>

            <OrderSeperator title={"Appetizers"} />
            <OrderOptions options={Appetizers}/>

            <OrderSeperator title={"Specialty Pizzas"} />
            <OrderOptions options={SpecialtyPizzas}/>

            <OrderSeperator title={"Subs"} />
            <OrderOptions options={Subs}/>

            <OrderSeperator title={"Desserts"} />
            <OrderOptions options={Desserts}/>

            <OrderSeperator title={"Order Instructions"}/>
            <OrderInstructions/>
        </div>
    );
}

export default Order;


