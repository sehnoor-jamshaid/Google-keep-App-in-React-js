import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styling.css'
function Footer()
{   const year=new Date().getFullYear();
    return(
        <div class="container-fluid footer">
         <div className="row">
             <div className="col-lg-12">
           <p className="text-center">Footer &copy; {year}</p>
         </div>
        </div>
        </div>
    );
}
export default Footer;