import { useState, useEffect } from "react";
import './Screen.css'; 
import Input from './Input'; 
import io from "socket.io-client";
import Row from './Row'; 


function Screen(props) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket === null) {
      return setSocket(io('ws://localhost:8080'));
    } else  {
      socket.on('message', data => {
        props.addMsg(data);
      });
    }
  }, [socket]);

  const sendMsg = (msg) => {  
    socket.emit('message', {
      timestamp: Date.now(), 
      id: props.id, 
      msg: msg, 
      key: props.messages.length+1,  
    }); 
  }

  const getClass = (id) => {
    const screen = props.className; 

    if (screen === 'right' && id === '2') {
      return ''; 
    } else if (screen === 'left' && id === '1') {
      return ''; 
    } else {
      return 'passive';
    }
  } 

  return (
    <div className={"screen "+props.className}>
      <div className="head">
        <span>{props.name}</span>
      </div>
      <div className="messages">
        {
          socket !== null && socket.connected ? ( 
            props.messages.map(obj => {
              return <Row key={obj.key} id={obj.id} timestamp={obj.timestamp} msg={obj.msg} className={getClass(obj.id)} />
            })
          ) : (
            <></>
          )
        }
      </div>
      <Input id={props.id} send={sendMsg} />
    </div>
  )
}

export default Screen