import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styling.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function Note(props)
{ 
    const DelEvent=()=>
    {
   props.deleteItem(props.id);
    }

    return(
        
      <div className="note1 my-2">
        <h3 class="heading">{props.title}</h3>
              <p class="para">{props.content}</p>
              <div className="justify-content-end d-flex">
               <button className="add " onClick={DelEvent}><FontAwesomeIcon icon={faTrash}/></button>
      </div>
                         
     </div>

    );
}
export default Note;