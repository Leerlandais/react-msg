import PropTypes from "prop-types";
import OpinionButton from "./OpinionButton.jsx";
import DeleteButton from "./DeleteButton.jsx";

export default function MessageList({id, firstname, surname, email, text, onDelete}) {


    return (
        <>

            <div key={id}
                 className="messageHolder">
                <DeleteButton onDelete={onDelete} id={id} />
                <h4><span className="italic" title={email}>{firstname} {surname}</span>
                </h4>
                <p>{text}</p>
                <OpinionButton className="fa fa-thumbs-up" />
                <OpinionButton className="fa fa-thumbs-down" />

            </div>
        </>
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

