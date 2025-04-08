import React, { useCallback, useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap.js";
import Headquarters from "./Headquarters.js";
import Area from "./Area.js";
import HostList from "./HostList.js";
import Host from "./Host";
import ColdStorage from "./ColdStorage.js";
import LogPanel from "./LogPanel.js";
import Details from "./Details";
import HostInfo from "./HostInfo.js";

function App() {
  const [hosts, setHosts] = useState(null);
  const [areas, setAreas] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selected, setSelected] = useState(null);
  const [logs, setLogs] = useState([]);
  const fetchData = useCallback(async (url, func) => {
    try {
      const response = await fetch("http://localhost:3001/" + url);
      const json = await response.json();
      func(json);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (areas && hosts) setIsLoaded(true);
  }, [areas, hosts]);
  useEffect(() => {
    if (!isLoaded) {
      fetchData("hosts", setHosts);
      fetchData("areas", setAreas);
    }
  }, [fetchData, isLoaded]);
  const activateAll = (key, status) => {
    let newHosts = [...hosts].map((host) => {
      host[`${key}`] = status;
      return host;
    });
    setHosts(newHosts);
  };
  const changeArea = (id, key, value) => {
    let newHost = { ...selected };
    newHost[`${key}`] = value;
    setSelected(newHost);
    let index = hosts.indexOf(hosts.find((host) => host.id === id));
    let newHosts = [...hosts];
    newHosts.splice(index, 1, newHost);
    setHosts(newHosts);
  };
  const addLogs = (log) => {
    setLogs([log, ...logs]);
  };
  const splitAndCapitalize = (str) => {
    return str
      .split("_")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
  };
  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      {isLoaded ? (
        <>
          <WestworldMap>
            {areas.map((area, index) => {
              return (
                <Area
                  splitAndCapitalize={splitAndCapitalize}
                  key={index}
                  area={area}
                  hosts={hosts.filter(
                    (host) => host.area === area.name && host.active
                  )}
                >
                  <HostList>
                    <Host selected={selected} setSelected={setSelected} />
                  </HostList>
                </Area>
              );
            })}
          </WestworldMap>
          <Headquarters>
            <ColdStorage>
              <HostList hosts={hosts.filter((host) => !host.active)}>
                <Host selected={selected} setSelected={setSelected} />
              </HostList>
            </ColdStorage>
            <Details host={selected}>
              <HostInfo
                splitAndCapitalize={splitAndCapitalize}
                addLogs={addLogs}
                areas={areas}
                hosts={hosts}
                changeArea={changeArea}
              />
            </Details>
            <LogPanel logs={logs} addLogs={addLogs} activateAll={activateAll} />
          </Headquarters>
        </>
      ) : (
        <p>Loading</p>
      )}
    </Segment>
  );
}

export default App;
