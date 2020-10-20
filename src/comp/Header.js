import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styling.css'
import keep from './images/keep.png'
function Header()
{

    return(
        <div class="container-fluid header">
            <nav >
                <div className="container py-3">
            <img className="float-left image" src={keep} alt="img"/>
            <h2 className="text-left mt-2">Google Keep App</h2>
            </div>
            </nav>
        </div>
    );
}
export default Header;