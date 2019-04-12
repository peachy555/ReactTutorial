// import React from "react"
// import ReactDOM from "react-dom"

// // ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER)
// // Can't have multiple adjacent JSX elements, but can wrap them in a comtainer element to make it look like one element
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"))

// ==============================================================

// import React from "react"
// import ReactDOM from "react-dom"

// ReactDOM.render(
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>
// , document.getElementById("root"))

// ==============================================================

// import React from "react"
// import ReactDOM from "react-dom"

// // functional component
// function MyApp() {
// 	return (
// 		<ul>
// 			<li>1</li>
// 			<li>2</li>
// 			<li>3</li>
// 		</ul>
// 	)
// }
// ReactDOM.render( <MyApp />, document.getElementById("root"))

// ==============================================================

// import React from "react"
// import ReactDOM from "react-dom"

// function MyInfo() {
// 	return (
// 			<div>
// 				<h1>My Name</h1>
// 				<p>A bit about myself</p>
// 				<ul>
// 					<li>Tokyo</li>
// 					<li>Bangkok</li>
// 					<li>Sydney</li>
// 				</ul>
// 			</div>
// 		)
// }

// ReactDOM.render(<MyInfo /> , document.getElementById("root"))

// ==============================================================

// import React from "react"
// import ReactDOM from "react-dom"

// import MyInfo from "./components/MyInfo.js"


// ReactDOM.render(<MyInfo /> , document.getElementById("root"))

// ==============================================================

import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App.js"

ReactDOM.render(<App />, document.getElementById("root"))