import React, { useCallback, useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap.js'
import Headquarters from './Headquarters.js'

function App() {
  const [hosts, setHosts]= useState(null)
  const [areas, setAreas] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const fetchData = useCallback(async(url, func)=>{
    const response = await fetch('http://localhost:3001/' + url)
    const json = await response.json()
    func(json)
  },[])

    useEffect(()=>{
      if (!isLoaded) {
        fetchData('hosts', setHosts)
      fetchData('areas', setAreas) 
      if(areas && hosts) setIsLoaded(true)
    }     
    },[fetchData, isLoaded, areas, hosts])
    const callBackFunc = (obj)=>{
console.log(obj)
    }
  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
       {isLoaded ? <>
       <WestworldMap areas={areas} hosts={hosts} callBackFunc={callBackFunc}/> 
       <Headquarters hosts={hosts} callBackFunc={callBackFunc}/></>: <p>Loading</p>} 
    </Segment>
  );
}

export default App;
