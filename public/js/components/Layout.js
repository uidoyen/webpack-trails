import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
 render() {
    return (
     <div>
	     <Header />
	     <hr />
	     <h1>Layout</h1>
	     <hr />
	     <Footer />
     </div>
    );
  }
}