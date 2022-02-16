import './App.css';
import Screen from './components/Screen'; 
import { useState } from "react"; 


function App() {  
  const [messages, addMessage] = useState([]); 

  const addMsg = (data) => {
    return addMessage(history => {
      const found = history.some(obj => {
        if (
          obj.id === data.id && 
          obj.key === data.key && 
          obj.msg === data.msg 
        ) {
          return true;
        }
      });

      return found ? history : [...history, data]; 
    });
  };

  return (
    <div className="App">
      <div className="body">
        <Screen name="Lorem Ipsum" id="1" messages={messages} addMsg={addMsg} className='left' /> 
        <div className="desc">
          <p>Each screen emulates a phone where you can send and receive simple text messages. It's basically a simple chat app build with <a href="https://reactjs.org" target="_blank">ReactJS</a>, <a href="https://nodejs.org/" target="_blank">NodeJS</a> and <a href="https://socket.io" target="_blank">Socket.io</a>. Have fun playing with it :)</p>
        </div>
        <Screen name="Dolat Sit" id="2" messages={messages} addMsg={addMsg} className='right' /> 
      </div>
    </div>
  );
}

export default App;