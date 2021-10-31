//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";

import ReactDOM from "react-dom";

ReactDOM.render(
	<div>
		<h1> Hi, my hobbies are: </h1>
		<ul>
			<li> Swimming</li>
			<li> Badminton</li>
			<li> Listening to Music</li>
		</ul>
	</div>,
	document.getElementById("root")
);
