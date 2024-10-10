
export default function OpinionButton({className, onClick}) {

    return (
        <>
            <button className="opinion-button" onClick={onClick}>
                <i className={className}></i>
            </button>
        </>
    )
}