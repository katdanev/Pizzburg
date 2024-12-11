import "./order.css"
import QuantityButton from "./QuantityButton";

function OrderCard({ title, image, price }) {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
    }

    return (
        <div className={"card-background"} style={backgroundStyle}>
            <div className={"card-overlay"}>
                <h3>{title}</h3>
            </div>
            <div className={"card-info"}>
                <span>${price}</span>
                <QuantityButton/>
            </div>
        </div>
    );
}

export default OrderCard;