function DeleteButton({ onDelete, id }) {

    return (
        <div className="delBtnHolder">
            <button onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}

export default DeleteButton;
