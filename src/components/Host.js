import React, {useState, useEffect} from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, selected,setSelected}) {
  const[clsName, setClsName] = useState('host')
  const [isClicked, setIsClicked]= useState(false)
 
  useEffect(()=>{
    if (selected){
    switch (selected.id === host.id) {
      case true:
        setClsName("host selected")
        break;
      case false: 
        setClsName("host")
        break;
      default:
        setClsName("host")
        break;
    }}
 
  },[selected,host])
  const handleClick = ()=>{
    setIsClicked(!isClicked)
    if (!selected){
      setSelected(host)
    }else if(selected.id !== host.id){
      setSelected(host)
    }else {
      return
    };
  
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
