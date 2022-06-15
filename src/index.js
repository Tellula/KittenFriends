import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons"; //Bootstrap like library to style html by adding classes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); //tells React to insert App in the div id 'root' from index.html

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
