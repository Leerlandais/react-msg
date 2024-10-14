// dependencies imports
import './App.css'
import {useEffect, useState} from "react";

// component imports
import MessageForm from "./components/MessageForm.jsx";
import MessageList from "./components/MessageList.jsx";


function App() {

    const [messages, setMessages] = useState(() => {
        const storedMessages = localStorage.getItem("messages");
            if (storedMessages == null) return [];
            return JSON.parse(storedMessages);
    })
    // Any changes cause this to be run, saving everything to LS
    useEffect(() =>{
        localStorage.setItem("messages", JSON.stringify(messages));
    },[messages])

        function addMessage(data) {
            setMessages((currentMessages) => {
                return [
                    ...currentMessages,
                    { id: crypto.randomUUID(),
                        likeCount: 0,
                        hateCount: 0,
                        ...data}
                ]
            })
        }

        function deleteMessage(id) {
        setMessages((currentMessages) => {
            return currentMessages.filter(message => message.id !== id)
        })
        }

    function updateMessage(id, newLikeCount, newHateCount) {
        setMessages((currentMessages) => {
            return currentMessages.map(message => {
                if (message.id === id) {
                    return {
                        ...message,
                        likeCount: newLikeCount,
                        hateCount: newHateCount
                    };
                }
                return message;
            });
        });
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
                  <>
                      {messages.map(message => (
                          <MessageList
                              key={message.id}
                              id={message.id}
                              firstname={message.firstname}
                              surname={message.surname}
                              email={message.email}
                              text={message.text}
                              likeCount={message.likeCount}
                              hateCount={message.hateCount}
                              onDelete={deleteMessage}
                              onUpdate={updateMessage}
                          />
                      ))}
                  </>
              </div>
          </div>
      </>
  )
}

export default App
