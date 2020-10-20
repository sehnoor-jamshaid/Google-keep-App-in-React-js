import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styling.css'

function CreateNote(props)
{
   const [values,setvalues]=useState({
       title:"",
       content:"",
   });
   const inputEvent=(event)=>
   {
       const {name,value}=event.target;
       setvalues((old)=>
       {
         return {...old,
            [name]:value,
        }
       })
   }
   const addNote=()=>
   {
props.passNote(values);
setvalues(
    {
        title:"",
        content:"",
    }
)
   }
    return(
        <div class="container mt-3 justify-content-center align-item-center d-flex">
            <div className="row">
                <div class="col-lg-12">
                          <div className="note">
                           <input className="input1  p-3" type="text" placeholder="Title" name="title" onChange={inputEvent}
                           value={values.title
                        } autoComplete="off"
                           />
                           <textarea className="input2  p-3" rows="4" column="30" placeholder="Content" 
                           name="content" onChange={inputEvent} value={values.content} />
                         <div className="justify-content-end d-flex">
                         <button className="add " onClick={addNote}>+</button>
                         </div>
                         
                    </div>

            </div>
            
        </div>
        </div>
    );
}
export default CreateNote;