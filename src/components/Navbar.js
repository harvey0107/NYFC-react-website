import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobile = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    NYFC<i className="fas fa-dumbbell"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-meun active' : 'nav-meum'}>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobile}>
                            About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/exercises' className='nav-links' onClick={closeMobile}>
                            Exercises
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobile}>
                            Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/career' className='nav-links' onClick={closeMobile}>
                            Career
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>  
        </>
    )
}

export default Navbar
