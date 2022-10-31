import { Link, Outlet } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <>
    <nav id='nav'>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
        <li><Link to='/createaccount'>Criar conta</Link></li>
        <li><Link to='/messages'>Mensagem</Link></li>
        <li><Link to='/favoritemessages'>Mensagens favoritas</Link></li>
      </ul>
    </nav>
      <Outlet/>
    </>
  )
}

export default Nav