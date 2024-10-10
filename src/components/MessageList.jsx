import PropTypes from "prop-types";
import OpinionButton from "./OpinionButton.jsx";
import DeleteButton from "./DeleteButton.jsx";
import {useState} from "react";

export default function MessageList({ id, firstname, surname = "", email, text, onDelete }) {
    const [hateCount, setHateCount] = useState(0);
    const [likeCount, setLikeCount] = useState(0);

    return (
        <div className="messageHolder">
            <DeleteButton onDelete={onDelete} id={id} />

            <h4>
                <span className="italic" title={email}>
                    {firstname} {surname}
                </span>
            </h4>

            <p>{text}</p>

            <div className="opinion-buttons">
                <span className="opinionCounter">{likeCount}</span>

                <OpinionButton
                    className="fa fa-thumbs-down"
                    onClick={() => setHateCount(hateCount + 1)}
                />
                <OpinionButton
                    className="fa fa-thumbs-up"
                    onClick={() => setLikeCount(likeCount + 1)}
                />
                <span className="opinionCounter">{hateCount}</span>
            </div>
        </div>
    );
}


MessageList.propTypes = {
    id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    surname: PropTypes.string,
    email: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};


