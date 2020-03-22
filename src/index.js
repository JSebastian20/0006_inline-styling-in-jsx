//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.

//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// const currentHour = new Date(2020, 2, 14, 19).getHours();
const currentHour = new Date().getHours();
let custStyle = {
  color: ""
};
let greeting;

if (currentHour < 12) {
  custStyle.color = "red";
  greeting = "Good Morning";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  custStyle.color = "green";
} else {
  greeting = "Good Evening!";
  custStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={custStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
