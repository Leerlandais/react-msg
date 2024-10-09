import { useState } from "react";

export default function MessageForm(props) {
    // State for each input
    const [newMsg, setNewMsg] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userMail, setUserMail] = useState("");

    // Form submission handler
    function formSubmission(e) {
        e.preventDefault();

        // Basic validation (ensure all fields are filled)
        if (!newMsg || !firstName || !lastName || !userMail) return;

        // Create the message object
        const formData = {
            firstname: firstName,
            lastname: lastName,
            email: userMail,
            message: newMsg,
        };

        // Pass the form data to parent via props
        props.onSubmit(formData);

        // Reset form fields
        setNewMsg("");
        setFirstName("");
        setLastName("");
        setUserMail("");
    }

    return (
        <form onSubmit={formSubmission} className="myForm" id="myForm">
            <h2 id="h2Message">Laissez-nous un message</h2>

            {/* First Name Input */}
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
                    onChange={(e) => setFirstName(e.target.value)} // Handle change
                />
            </div>

            {/* Last Name Input */}
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
                    onChange={(e) => setLastName(e.target.value)} // Handle change
                />
            </div>

            {/* Email Input */}
            <div className="formDiv div_usermail">
                <label htmlFor="usermail" id="label_usermail" className="inputLabel">
                    E-mail
                </label>
                <input
                    type="email" // Better to use "email" type for validation
                    name="usermail"
                    id="inputUserMail"
                    className="inputText input_usermail"
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)} // Handle change
                />
            </div>

            {/* Message Input */}
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
                    onChange={(e) => setNewMsg(e.target.value)} // Handle change
                />
            </div>

            {/* Submit Button */}
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
