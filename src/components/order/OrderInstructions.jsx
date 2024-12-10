import "./order.css"
import TextField from "./TextField";
import OrderButton from "./OrderButton";

function OrderInstructions() {
    return (
        <div className={"order-instructions"}>
            <div>
                <TextField title={"Your address"}/>
                <TextField title={"Your phone number"}/>
                <TextField title={"Your name"}/>
            </div>
            <TextField title={"Special Instructions"} multiline={true}/>
            <div/>
            <div className={"order-instruction-buttons"}>
                <OrderButton title={"Cancel"} type={"danger"} onClick={() => {

                }}/>
                <OrderButton title={"Order"} type={"success"} onClick={() => {

                }}/>
            </div>
        </div>
    );
}

export default OrderInstructions;