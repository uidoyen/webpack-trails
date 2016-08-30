import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";


require('../scss/main.scss');


const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);