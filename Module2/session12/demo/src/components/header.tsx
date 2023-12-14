import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/date'>Date</Link>
            </li>
            <li>
                <Link to='/aaaa'>AAAA</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header