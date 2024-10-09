import PropTypes from "prop-types";

export default function MessageList({ id, text }) {
    return (

        <div key={id}
             className="messageHolder">
            <h4><span className="italic" title={id}>Test</span>
            </h4>
            <p>{text}</p>
        </div>
    )
}

MessageList.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};