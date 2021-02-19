import Item from 'antd/lib/list/Item'
import React, { Component } from 'react'
import {MenuItems} from './Menultems'
import './Navbar2.css'

class Navbar2 extends Component{
    state ={clicked: false}
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItem'>
                <i className="fas fa-dumbbell"></i>
                <h1 className='navbar-logo'>NYFC</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}</a>
                            </li>
                        )
                    })}  
                </ul>

            </nav>
        )
    }
}




export default Navbar2