import React, { useEffect, useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { Log } from "../services/Log";

function HostInfo({
  host,
  areas,
  hosts,
  addLogs,
  splitAndCapitalize,
  toggleHostInfo,
}) {
 
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const newOptions = areas.map((area) => {
      return {
        key: area.name,
        text: area.name
          .split("_")
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
          .join(" "),
        value: area.name,
      };
    });
    setOptions(newOptions);
  }, [areas]);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setValue(host.area);
    setChecked(host.active);
  }, [host]);

  function handleOptionChange(e, { value }) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    let selectedArea = areas.find((area) => area.name === value);
    let totalAreaHosts = hosts.filter((host) => host.area === value);
    if (totalAreaHosts.length >= selectedArea.limit) {
      addLogs(
        Log.error(
          `Too many hosts. Cannot add ${host.firstName} to ${splitAndCapitalize(
            value
          )}`
        )
      );
    } else {
      toggleHostInfo(host.id, "area", value);
      addLogs(
        Log.notify(`${host.firstName} set in area ${splitAndCapitalize(value)}`)
      );
      return setValue(value);
    }
  }
// toggle activate host slider function
  function handleRadioChange() {
    console.log("The radio button fired");
    toggleHostInfo(host.id, "active", !checked);
    (!checked) ? addLogs(Log.warn(` Activated ${host.firstName}`)) : addLogs(Log.notify(` Decommissioned ${host.firstName}`));
    return setChecked(!checked);
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} |{" "}
              {host.gender === "Male" ? (
                <Icon name="man" />
              ) : (
                <Icon name="woman" />
              )}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={checked ? "Active" : "Decommissioned"}
                checked={checked}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
