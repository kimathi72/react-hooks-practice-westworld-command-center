import React from "react";
import "../stylesheets/Area.css";


function Area({area, hosts,splitAndCapitalize, children}) {
  
  return (
    <div
      className="area"
      id={
        area.name
      }
    >
      <h3 className="labels">
        {splitAndCapitalize(area.name)}
      </h3>
      {React.cloneElement(children, {hosts: hosts})}
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
