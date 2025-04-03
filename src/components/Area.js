import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList.js'

function Area({area, hosts, callBackFunc}) {
  return (
    <div
      className="area"
      id={
        area.name
      }
    >
      <h3 className="labels">
        {(area.name.split('_').map(str=>str.charAt(0).toUpperCase() + str.slice(1)).join(" "))}
      </h3>
      <HostList hosts={hosts} callBackFunc={callBackFunc}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
