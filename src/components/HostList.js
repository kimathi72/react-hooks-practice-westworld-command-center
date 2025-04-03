import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts, callBackFunc}) {
  return (
    <Card.Group itemsPerRow={6}>  {
          hosts.map((host,index) => {
          return <Host host={host} key={index} callBackFunc={callBackFunc}/>
          })
        }</Card.Group>
  );
}

export default HostList;
