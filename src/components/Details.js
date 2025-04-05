import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";


function Details({host, children}) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {!host ? <Image  src={Images.westworldLogo} size="small" /> : React.cloneElement(children, {host: host})}
    </Segment>
  );
}

export default Details;
