import "./order.css"
import PropTypes from "prop-types";

function TextField( { title, multiline, className }) {

    const classes = className ? `text-field ${className}` : "text-field"

    if (multiline) {
        // The empty style is to fix that it auto adds height and width
        return (
            <div className={classes}>
                <h1>{title}</h1>
                <textarea style={{}} maxLength={250}/>
            </div>
        );
    } else {
        return (
            <div className={classes}>
                <h1>{title}</h1>
                <input type={"text"}/>
            </div>
        );
    }
}

TextField.defaultProps = {
    multiline: false,
    className: ""
}

TextField.propTypes = {
    title: PropTypes.string.isRequired,
    multiline: PropTypes.bool,
    className: PropTypes.string
}

export default TextField;