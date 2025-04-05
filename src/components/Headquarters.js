import React from "react";
import { Grid } from "semantic-ui-react";

import "../stylesheets/Headquarters.css";


function Headquarters({children}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        {children[0]}
      </Grid.Column>
      <Grid.Column width={5}>
        {children[1]}
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        {children[2]}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
