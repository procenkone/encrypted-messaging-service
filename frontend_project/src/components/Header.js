import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink className="navbar-brand" to="/">Home</NavLink>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <NavLink className="nav-link" to='/create'>Create</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/note'>Note</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/about'>About</NavLink>
                                </li>
                                
                            </ul>

                        </div>

                    </div>

                </nav>


                {/* <nav className='navbar navbar-dark bg-primary'>
                        <div className='container-fluid'>
                            <NavLink className='navbar-brand' exact className='' to='/'>Home </NavLink>
                        </div>
                        <div>
                            <NavLink className='navbar-brand' exact className='' to='/note'>Note </NavLink>
                        </div>
                        <div>
                            <NavLink className='navbar-brand' exact className='' to='/create'>Create </NavLink>
                        </div>
                        <div>
                            <NavLink className='navbar-brand' exact className='' to='/about'>About </NavLink>
                        </div>
                </nav> */}
            </div>
        </>
    )
}