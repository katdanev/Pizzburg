import "./order.css"
import OrderCard from "./OrderCard";

function OrderOptions({ options }) {

    return (
        <div className={"order-options"}>
            {options.map((option, index) => (
                <OrderCard title={option.title} image={option.image} price={option.price} key={index}/>
            ))}
        </div>
    );
}

export default OrderOptions;