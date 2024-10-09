// dependencies imports
import './App.css'
import {useState} from "react";

// component imports
import MessageForm from "./components/MessageForm.jsx";
import MessageList from "./components/MessageList.jsx";

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
                    return <MessageList {...message} key={message.id} />
                  })}


              </div>
          </div>
      </>
  )
}

export default App
