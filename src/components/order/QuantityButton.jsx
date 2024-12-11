import "./order.css"
import {useRef} from "react";

// Icons Licensed Under: https://lucide.dev/license

function QuantityButton() {

    const value = useRef(null);

    function getQuantity() {
        return parseInt(value.current.innerText) || 0;
    }

    function increment() {
        value.current.innerText = `${getQuantity() + 1}`;
    }

    function decrement() {
        if (getQuantity() > 0) {
            value.current.innerText = `${getQuantity() - 1}`;
        }
    }

    return (
        <div className={"quantity-button"}>
            <div className={"quantity-decrement quantity-buttons"} onClick={decrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-minus">
                    <path d="M5 12h14"/>
                </svg>
            </div>
            <div>
                <h1
                    className={"quantity-number"}
                    contentEditable={"true"}
                    suppressContentEditableWarning
                    ref={value}

                    onKeyPress={event => {
                        const key = event.charCode || event.keyCode;
                        if (isNaN(parseInt(String.fromCharCode(event.which))) || key === 32 || key === 13) {
                            event.preventDefault();
                        }
                    }}
                >0</h1>
            </div>
            <div className={"quantity-increment quantity-buttons"} onClick={increment}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-plus">
                    <path d="M5 12h14"/>
                    <path d="M12 5v14"/>
                </svg>
            </div>
        </div>
    );
}

QuantityButton.defaultProps = {
    maxQuantity: 10
}

export default QuantityButton;