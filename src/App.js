import React, { useEffect, useState } from "react";

import Heading from "./Heading";
import Recepe from "./Recepe";


const App=()=> {

  const[val,setval]=useState('');
  const[value,setvalue]=useState('');
  const[fet,setfet]=useState([]);

  const Change=(event)=>{
    setval(event.target.value);
   
   
  };

  const Click=()=>{
    
    setvalue(val);
  
  };
  

 
  const FetchData=async()=>{
  
      const res=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=abc36306&app_key=239e03d22a3c5b1829557fc496f66be7`);
      const data=await res.json();
      setfet(data.hits)
      
     
      
  };
  console.log(fet);

  useEffect(()=>{
    FetchData();

  },[value]);
    

  

  return (
  <>
  
  <Heading val={val} Click={Click} Change={Change}   />
  <div className="container-fluid">
    <Recepe fet={fet}/> 
    </div>
  </>
  );
}

export default App;
