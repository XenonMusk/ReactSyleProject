import React from "react";
import ReactDOM from "react-dom";
const d = new Date();
let time = d.getHours();
const customStyle = {
  color: ""
};
let greeting;
if (time < 12) {
  customStyle.color = "red";
  greeting = "Good Morning";
} else if (time < 18) {
  customStyle.color = "blue";
  greeting = "Good AfterNoon";
} else {
  customStyle.color = "green";
  greeting = "Good Night";
}

ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
