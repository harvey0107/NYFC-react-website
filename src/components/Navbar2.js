import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {MenuItems} from './Menultems'

import './Navbar2.css'

const DesktopNav = () => {
    return (
        <nav className='NavbarItem'>
            <Link to='/'>
                <i className="fas fa-dumbbell"></i>
                <h1 className='navbar-logo'>NYFC</h1>
            </Link>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                        {item.title}</a>
                    </li>
                )
            })}  
        </nav>
    )
}

class MobileNav extends Component {
    state = {
        clicked: false,
    }

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
       
    render () {
        return (
            <div className="navbar-item">
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        )
    }
}

class Navbar2 extends Component{
    state ={
        clicked: false,
        windowWidth: 0,
    }
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }

    // event listener, resize event

    // check widow width, set state

    // component did mount, check window width

    render(){ 
        return(
           <>
            {this.state.windowWidth < 760 ? <MobileNav /> : <DesktopNav />}
           </>
        )
    }
}




export default Navbar2