//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(() => {
	let d1 = Math.floor(counter / 1) % 10;
	let d2 = Math.floor(counter / 10) % 10;
	let d3 = Math.floor(counter / 100) % 10;
	let d4 = Math.floor(counter / 1000) % 10;
	let d5 = Math.floor(counter / 10000) % 10;
	let d6 = Math.floor(counter / 100000) % 10;
	ReactDOM.render(
		<Home dig1={d1} dig2={d2} dig3={d3} dig4={d4} dig5={d5} dig6={d6} />,
		document.querySelector("#app")
	);
	counter++;
}, 0.0001);
