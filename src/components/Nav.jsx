import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav id='nav'>
      <ul>
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/message'>Mensagem</Link></li>
        <li><Link to='/listmessages'>Lista de mensagens</Link></li>
      </ul>
    </nav>
      <Outlet/>
    </>
  )
}

export default Nav