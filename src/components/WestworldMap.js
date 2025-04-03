import React from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area.js'


function WestworldMap({areas,hosts,callBackFunc}) {

  return <Segment id="map">{/* What should we render on the map? */}
{areas.map((area,index)=>{
  return <Area key={index} area={area} hosts={hosts.filter(host=>host.area === area.name && host.active)} callBackFunc={callBackFunc}/> 
})}
  </Segment>;
}

export default WestworldMap;
