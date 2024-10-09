import { useState } from "react";

export default function MessageForm(props) {
    // Need a state for each input - NOTE TO SELF: Find out if it's possible to do these together, for example const [newMsg, setNewMsg] = useState([])
    const [newMsg, setNewMsg] = useState("Message");
    const [firstName, setFirstName] = useState("Lee");
    const [lastName, setLastName] = useState("Brennan");
    const [userMail, setUserMail] = useState("lee@leerlandais.com");

    function formSubmission(e) {
        // Can't have a form without a preventDef :-D
        e.preventDefault();
        if (!newMsg || !firstName || !userMail) return; // surname is optional so no need for it here

        // creation of the form object
        const formData = {
            firstname: firstName,
            lastname: lastName,
            email: userMail,
            text: newMsg,
        };
        // have to send the data myself seeming as I prevented the submit (back in the day, I often forgot this bit)
        props.onSubmit(formData);

        // Clear out the fields once the form is submitted - As with the useState NTS, think of how to do this with a single line of code
        setNewMsg("");
        setFirstName("");
        setLastName("");
        setUserMail("");
    }

    return (
        // Need to find out how to comment within the form as '//' doesn't work
        <form onSubmit={formSubmission} className="myForm" id="myForm">
            <h2 id="h2Message">Laissez-nous un message</h2>

            <div className="formDiv div_firstname">
                <label htmlFor="firstname" id="label_firstname" className="inputLabel">
                    Prénom
                </label>
                <input
                    type="text"
                    name="firstname"
                    id="inputFirstName"
                    className="inputText input_firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="formDiv div_lastname">
                <label htmlFor="lastname" id="label_lastname" className="inputLabel">
                    Nom
                </label>
                <input
                    type="text"
                    name="lastname"
                    id="inputLastName"
                    className="inputText input_lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="formDiv div_usermail">
                <label htmlFor="usermail" id="label_usermail" className="inputLabel">
                    E-mail
                </label>
                <input
                    type="email"
                    name="usermail"
                    id="inputUserMail"
                    className="inputText input_usermail"
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)}
                />
            </div>

            <div className="formDiv div_message">
                <label htmlFor="message" id="label_message" className="inputLabel label_mess">
                    Message
                </label>
                <textarea
                    name="message"
                    id="inputMessage"
                    className="inputText input_message"
                    cols="20"
                    rows="2"
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                />
            </div>

            <div className="formDiv div_subButton">
                <button className="subButton" id="subButton">
                    Envoyer
                </button>
                <span className="lengthSpan" id="lengthSpan">
                    0
                </span>
                <span className="lengthSpan">/600</span>
            </div>
        </form>
    );
}
