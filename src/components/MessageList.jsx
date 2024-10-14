import PropTypes from "prop-types";
import OpinionButton from "./OpinionButton.jsx";
import DeleteButton from "./DeleteButton.jsx";
import {useState} from "react";

export default function MessageList({id,
                                     firstname,
                                     surname = "",
                                     email,
                                     text,
                                     likeCount,
                                     hateCount,
                                     onDelete,
                                     onUpdate
                                    }) {
    const [localLikeCount, setLocalLikeCount] = useState(likeCount);
    const [localHateCount, setLocalHateCount] = useState(hateCount);

    function handleLike() {
        const newLikeCount = localLikeCount + 1;
        setLocalLikeCount(newLikeCount);
        onUpdate(id, newLikeCount, localHateCount); // Send the updated counts to the parent
    }

    function handleHate() {
        const newHateCount = localHateCount + 1;
        setLocalHateCount(newHateCount);
        onUpdate(id, localLikeCount, newHateCount); // Send the updated counts to the parent
    }

    return (
        <div className="messageHolder">
            <DeleteButton onDelete={onDelete} id={id}/>
            <h4><span className="italic" title={email}>{firstname} {surname}</span></h4>
            <p>{text}</p>
<div className="opinion-buttons">
    <span className="opinionCounter">{likeCount}</span>
            <OpinionButton className="fa fa-thumbs-up" onClick={handleLike}/>
            <OpinionButton className="fa fa-thumbs-down" onClick={handleHate}/>
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


