import React from "react";
import { Segment } from "semantic-ui-react";



function WestworldMap({children}) {

  return <Segment id="map">{/* What should we render on the map? */}
{children}
  </Segment>;
}

export default WestworldMap;
