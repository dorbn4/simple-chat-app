import './Row.css'; 

export default function Row(props) {
  return (
    <div className={'row '+props.className} id={props.id} key={props.key}>
      <div className='msg'>
        <p>{props.msg}</p>
      </div>
    </div>
  )
}