import { Link, Outlet } from 'react-router-dom';
import { TbMessages } from 'react-icons/tb'
import './nav.css'

const Nav = () => {
  return (
    <>
    <nav id='nav'>
      
      <ul>
      <span><Link to="/">Home {<TbMessages/>}</Link></span>
        <li><Link to='/messages'>Messages</Link></li>
        <li>Logout</li>
      </ul>
    </nav>
      <Outlet/>
    </>
  )
}

export default Nav