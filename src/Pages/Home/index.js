import '../../Components/Styles/home.css';
import { ArrowDownCircle } from 'react-ionicons';

function App() {
  return (
    <div className="Container">
      <div className="WelcomeTitle">
        Hello, <br/>
        My name is<br/>Poramee Chansuksett.
      </div>
      <div className="Position">
        Software Developer
      </div>
      <div className="ScrollInstruction">
        <ArrowDownCircle color={'#ffffff'} width="40px" height="40px"/>
        <div className="text">
          Scroll to reveal menu
        </div>
      </div>
    </div>
  );
}

export default App;
