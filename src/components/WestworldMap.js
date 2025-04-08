import React from "react";
import { Segment } from "semantic-ui-react";



function WestworldMap({children}) {

  return <Segment id="map">{/* What should we render on the map? */
  console.log(children)}
{children}
  </Segment>;
}

export default WestworldMap;
