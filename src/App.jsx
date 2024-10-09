// dependencies imports
import './App.css'

// component imports
import './components/MessageForm.jsx';
import MessageForm from "./components/MessageForm.jsx";


function App() {


  return (
      <>
          <h1>Livre d&apos;or</h1>
          <div className="upperSection">
              <div className="imageDiv">
                  <img src="../public/images/email.png" alt="emailLogo" />
              </div>

              <MessageForm />

          </div>
      </>
  )
}

export default App
