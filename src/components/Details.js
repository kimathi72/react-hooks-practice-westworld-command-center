import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from './HostInfo.js'

function Details({host}) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {!host ? <Image  src={Images.westworldLogo} height={200} width={300} /> : <HostInfo host={host}/>}
    </Segment>
  );
}

export default Details;
