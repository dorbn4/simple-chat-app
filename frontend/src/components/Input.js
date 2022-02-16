import './Input.css'; 

function Input(props) {
  const sendMsg = (e) => {
    const elem = e.target.closest('button').previousElementSibling; 
    const value = elem.value.trim();
          elem.value = ''; 
  
    props.send(value); 
  } 

  const handleKey = (e) => {
    if (e.code === 'Enter') e.target.nextElementSibling.click(); 
  }

  return (
    <div className="input">
      <div className="buttons">
        <input type="text" placeholder="Type your message ..." onKeyPress={handleKey} />
        <button onClick={e => sendMsg(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"/></svg>
        </button>
      </div>
    </div>
  )
}

export default Input