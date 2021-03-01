import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {MenuItems} from './Menultems'

import './Navbar2.css'

// functional component
const DesktopNav = () => {
    return (
        <nav className='NavbarItem'>
            <Link to='/'>
                <i className="fas fa-dumbbell" />
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


// class base component
// store state
class MobileNav extends Component {
    state = {
        clicked: false,
    }

    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
       
    render () {
        return (
            <div>
                <div className="navbar-item">
                    <div className='menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                {this.state.clicked && (
                    <ul className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}</a>
                                </li>
                            )
                        })}  
                    </ul>
                )}
            </div>
        )
    }
}

// navbar wrapper, conditional render desktop or mobile nav base on window width
class Navbar2 extends Component {
    state = {
        windowWidth: null, 
    }

    componentDidMount () {
        console.log(window.innerWidth);
        this.setState({windowWidth : window.innerWidth});
        window.addEventListener("resize", this.onResize.bind(this));
    }

    onResize() {
        console.log('on resize: ', window.innerWidth);
        this.setState({windowWidth: window.innerWidth});
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.onResize.bind(this));
    }
    
    render(){ 
        return(
           <>
            {this.state.windowWidth < 760 ? <MobileNav /> : <DesktopNav />}
           </>
        )
    }
}

export default Navbar2;
