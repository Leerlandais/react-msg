
import './App.css'

function App() {


  return (
      <>
          <h1>Livre d&apos;or</h1>
          <div className="upperSection">
              <div className="imageDiv">
                  <img src="../public/images/email.png" alt="emailLogo" />
              </div>
          <form method="POST" className="myForm" id="myForm">
              <h2 id="h2Message">Laissez-nous un message</h2>
              <div className="formDiv div_firstname">
                  <label htmlFor="firstname" id="label_firstname" className="inputLabel">Prénom</label>
                  <input type="text" name="firstname" id="inputFirstName" className="inputText input_firstName"/>
              </div>
              <div className="formDiv div_lastname">
                  <label htmlFor="lastname" id="label_lastname" className="inputLabel">Nom</label>
                  <input type="text" name="lastname" id="inputLastName" className="inputText input_lastName"/>
              </div>
              <div className="formDiv div_usermail">
                  <label htmlFor="usermail" id="label_usermail" className="inputLabel">E-mail</label>
                  <input type="text" name="usermail" id="inputUserMail" className="inputText input_usermail"/>
              </div>
              <div className="formDiv div_message">
                  <label htmlFor="message" id="label_message" className="inputLabel label_mess">Message</label>
                  <textarea name="message" id="inputMessage" className="inputText input_message" cols="20"
                            rows="2"></textarea>
              </div>
              <div className="formDiv div_subButton">
                  <button className="subButton" id="subButton">Envoyer</button>
                  <span className="lengthSpan" id="lengthSpan">0</span><span className="lengthSpan">/600</span>
              </div>
          </form>
          </div>
      </>
  )
}

export default App
