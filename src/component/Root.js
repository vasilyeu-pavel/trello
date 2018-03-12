import React from "react";
import App from "./app";
import store from "../store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


function Root () {
    return (
        <Provider store = {store}>
	       		<Router>
		           <App />
	            </Router>
        </Provider>
    );
}

export default Root;
