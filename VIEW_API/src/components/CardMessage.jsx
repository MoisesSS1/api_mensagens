import './CardMessage.css'

const CardMessage = ({message}) => {


  return (
    <div className='card-message' >
        <p>{message.advice}</p>

    </div>
  )
}

export default CardMessage