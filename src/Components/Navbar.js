import React, { Component } from 'react'
import News from './News'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    setCategory = () => {
        <News category = "business"/>
    }
    render() {
        return (
        <div>
            <nav className ="navbar fixed-top navbar-expand-lg bg-dark">
                <div className ="container-fluid">
                    <Link className ="navbar-brand" to="/" style = {{color : "white"}}>Navbar</Link>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className ="nav-item">
                                <Link className ="nav-link" aria-current="page" to="/" style = {{color : "white"}}>Home</Link>
                            </li>
                            <li className ="nav-item">
                                <Link className ="nav-link" aria-current="page" to="/about" style = {{color : "white"}}>About Us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style = {{color : "white"}}>
                                Category
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link className = "dropdown-item" to="/business">Business</Link></li>
                                    <li><hr className = "dropdown-divider"/></li>
                                    <li><Link className = "dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><hr className = "dropdown-divider"/></li>
                                    <li><Link className = "dropdown-item" to="/general">General</Link></li>
                                    <li><hr className = "dropdown-divider"/></li>
                                    <li><Link className = "dropdown-item" to="/health">Health</Link></li>
                                    <li><hr className = "dropdown-divider"/></li>
                                    <li><Link className = "dropdown-item" to="/science">Science</Link></li>
                                    <li><hr className = "dropdown-divider"/></li>
                                    <li><Link className = "dropdown-item" to="/sports">Sports</Link></li>
                                    <li><hr className = "dropdown-divider"/></li>
                                    <li><Link className = "dropdown-item" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar
