import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
constructor (){
	super();
	this.state = {
		title:"Yahya"
	};
}
render() {
	setTimeout(() => {
		this.setState({title:"Welcome Yahyaaa!"})
	}, 2000)
    return (
     <div>
	     <Header title={this.state.title} />
	     <Header title={"Other title"} />
	     <hr />
	     <h1>Layout</h1>
	     <hr />
	     <Footer />
     </div>
    );
  }
}