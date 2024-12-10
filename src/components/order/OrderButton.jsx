import "./order.css"

function OrderButton( { title, type, onClick }) {
    const classes = type ? `order-button order-${type}-button` : "order-button"

    return (
        <button className={classes} onClick={onClick}>
            {title}
        </button>
    );
}

export default OrderButton;