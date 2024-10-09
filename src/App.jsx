// dependencies imports
import './App.css'
import {useState} from "react";

// component imports
import './components/MessageForm.jsx';
import MessageForm from "./components/MessageForm.jsx";


function App() {


    const [messages, setMessages] = useState([])

function addMessage(text) {
    setMessages((currentMessages) => {
        return [
            ...currentMessages,
            { id: crypto.randomUUID(),
                text: text }
        ]
    })
}
console.log(messages)
  return (
      <>
          <h1>Livre d&apos;Or</h1>
          <div className="upperSection">
              <div className="imageDiv">
                  <img src="../public/images/email.png" alt="emailLogo"/>
              </div>

                <MessageForm onSubmit={addMessage} />

          </div>

          <div className="lowerSection">
              <div className="prevMessages">
                  <h3 id="prevMessHead">
                      {messages.length === 0 &&
                        <div className="messageHolder">
                            <h4><span className="italic">Pas des messages à afficher</span></h4>
                        </div>
                      }
                  </h3>
                  {messages.map(message => {
                      return (
                          <div key={message.id}
                              className="messageHolder">
                              <h4><span className="italic" title={message.id}>{message.firstname }</span>
                              </h4>
                              <p>{message.text}</p>
                          </div>
                      )
                  })}


              </div>
          </div>
      </>
  )
}

export default App
