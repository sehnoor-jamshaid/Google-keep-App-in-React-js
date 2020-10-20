import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comp/Header'
import Footer from './comp/Footer';
import CreateNote from './comp/CreateNote';
import Note from './comp/Note';


function App(props) {
  const [notes,setnote]=useState([]);
  const addNote=(values)=>

  {
   setnote((old)=>
   {
     return [...old,values];
   console.log(values)
   })
  }
  const onDel=(id)=>
  { console.log(id);
setnote((old)=>
  {
    return old.filter((val,index)=>
   {
    return (index!==id);
   })
})
  }
  return (
    <div className="App">
    <Header />
    <CreateNote passNote={addNote}/>
    <div class="container-fluid mt-4  ">
            <div className="row  d-flex-inline ">
                
    {notes.map((val,index)=>
    { return(
      <Note key={index}
       id={index} 
       title={val.title}
        content={val.content} 
        deleteItem={onDel}
      />
    )
      
    })
      }
      
      </div>
      </div>
    {/* <Footer/> */}
    </div>
  );


}

export default App;
