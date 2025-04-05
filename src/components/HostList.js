import React from "react";
import { Card } from "semantic-ui-react";


function HostList({hosts, children}) {
  return (
    <Card.Group itemsPerRow={6}>  {
          hosts.map((host,index) => {
          return React.cloneElement(children, {key: index, host: host})
          })
        }</Card.Group>
  );
}

export default HostList;
