import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage.js";
import LogPanel from "./LogPanel.js";

function Headquarters({hosts, callBackFunc}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage callBackFunc={callBackFunc} hosts={hosts.filter(host=> !host.active)}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details host= {hosts.filter(host => host.authorized)}/>
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
