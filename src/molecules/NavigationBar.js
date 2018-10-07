import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div className="navbar bg-info mb-4">
            <ul className="nav col">
                <li className="nav-item col-3"><Link className="nav-link text-white" to="/">Home</Link></li>
                <li className="nav-item col-3"><Link className="nav-link text-white" to="/new">Add Todo</Link></li>
                <li className="nav-item col-3"><Link className="nav-link text-white" to="/pending">Pending Todos</Link></li>
                <li className="nav-item col-3"><Link className="nav-link text-white" to="/completed">Completed Todos</Link></li>            
            </ul>
        </div>
    )
}

export default NavigationBar;