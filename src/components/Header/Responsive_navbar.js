import React from 'react'
import { ImCross } from "react-icons/im";
import './Navbar.css'
import {Link} from 'react-router-dom'

const Responsive_navbar = ({RemoveShowMenu}) => {
  return (
    <div className='res_nav'>

        <ul className='Res_Navlinks'>
        <li onClick={RemoveShowMenu}><ImCross/></li>
              <li  onClick={RemoveShowMenu}><Link exact  to="/">Home</Link></li>
              <li onClick={RemoveShowMenu}><Link exact  to="/menu">Menu</Link></li>
              <li onClick={RemoveShowMenu}><Link exact  to="/about">About</Link></li>
              <li onClick={RemoveShowMenu}><Link exact  to="/reviews">Reviews</Link></li>
              <li onClick={RemoveShowMenu}><Link exact  to="/recipes">Recipes</Link></li>
            </ul>
            </div>
    
  )
}

export default Responsive_navbar