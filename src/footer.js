import React,{ useState } from "react";
import './index.css';

export default function Footer() {
    const [first,setstyle]=useState("create");
    
     const Change=()=>{
       if(first==="create"){
        setstyle("create2");
       }else if(first==="create2"){
        setstyle("create")
       }
     }
     const [second,setshow]=useState("create1");
    
     const Change1=()=>{
       if(second==="create1"){
        setshow("create3");
       }else if(second==="create3"){
        setshow("create1")
       }
     }
  return (
    <>
    <div className="main">
    <div className="text">
    <h2>Styling using Function and Class Component</h2>
    </div>
    <button onClick={Change}>To see styling in functional component</button>
    <button onClick={Change1}>To see styling in class component</button>
    
    </div>
    <div className={first}>
               <p>This is created using functional Component</p>
             <div className="para">
            <p id="external">This is done using external Css</p>
            <p id="internal">This is done using internal Css</p>
             </div>
    </div>
       <div className={second}>
               <p>This is created using Class Component</p>
             <div className="para1">
            <p id="external1">This is done using external Css</p>
            <p id="internal1">This is done using internal Css</p>
             </div>
     </div>  
    </>
  )
}
