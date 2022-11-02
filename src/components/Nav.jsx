import { Link, Outlet } from 'react-router-dom';
import { TbMessages } from 'react-icons/tb'
import './nav.css'

const Nav = () => {
  return (
    <>
    <nav id='nav'>
      
      <ul>
      <span><Link to="/">Home {<TbMessages/>}</Link></span>
        <li><Link to='/messages'>Mensagem</Link></li>
        <li><Link to='/favoritemessages'>Mensagens favoritas</Link></li>
      </ul>
    </nav>
      <Outlet/>
    </>
  )
}

export default Nav