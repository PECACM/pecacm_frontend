import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../assets/css/accordian.css";

function Accordian() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="accordian">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <ExpansionPanel
              className="panel"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                2019-20
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <a href="/" className="link">
                  Report for year 2019-20
                </a>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <ExpansionPanel
              className="panel"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                2018-19
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <a href="/" className="link">
                  Report for year 2018-19
                </a>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
