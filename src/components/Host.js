import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, callBackFunc}) {
  const[clsName, setClsName] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const [selectedHost, setSelectedHost] = useState(null)
  
  useEffect(()=>{
    
    switch (isClicked) {
      case true:
        setClsName("host selected")
        setSelectedHost(host)        
        break;
      case false:
        setClsName("host")
        setSelectedHost(null)
        break;
      default:
        setClsName("host")
        break;
    }
 
  },[isClicked,host, setClsName])
  useEffect(()=>{
    if(selectedHost){
      callBackFunc(selectedHost)
    }
  },[selectedHost,callBackFunc])
  const handleClick = (e)=>{
    setIsClicked(!isClicked)
  }
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={clsName}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
