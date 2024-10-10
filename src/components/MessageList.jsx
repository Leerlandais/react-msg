import PropTypes from "prop-types";
import OpinionButton from "./OpinionButton.jsx";
import DeleteButton from "./DeleteButton.jsx";
import {useState} from "react";

export default function MessageList({ id, firstname, surname = "", email, text, onDelete, likeCount, hateCount, onUpdate }) {
    const [localHateCount, setLocalHateCount] = useState(hateCount);
    const [localLikeCount, setLocalLikeCount] = useState(likeCount);

    function handleLike() {
        const newLikeCount = localLikeCount + 1;
        setLocalLikeCount(newLikeCount);
        onUpdate(id, newLikeCount, localHateCount);
    }

    function handleHate() {
        const newHateCount = localHateCount + 1;
        setLocalHateCount(newHateCount);
        onUpdate(id, localLikeCount, newHateCount);
    }
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
                <span className="opinionCounter">{localLikeCount}</span>

                <OpinionButton
                    className="fa fa-thumbs-down"
                    onClick={handleHate}
                />
                <OpinionButton
                    className="fa fa-thumbs-up"
                    onClick={handleLike}
                />
                <span className="opinionCounter">{localHateCount}</span>
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


