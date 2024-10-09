import PropTypes from "prop-types";

export default function MessageList({id, firstname, surname, email, text}) {
    return (

        <div key={id}
             className="messageHolder">
            <h4><span className="italic" title={email}>{firstname} {surname}</span>
            </h4>
            <p>{text}</p>
        </div>
    )
}

MessageList.propTypes = {
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    surname: PropTypes.string,
    email: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

MessageList.defaultProps = {
    surname: "",
}

