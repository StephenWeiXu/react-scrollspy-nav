import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className="section-content">
				<h1>react-scrollspy-nav</h1>
				<p><b>react-scrollspy-nav</b> is a React component that provides smooth scrolling navigation to the page. 
				It also accounts for the factor that a React app may use different React router and therefore has 
				different url patterns (for example the hash pathname in <i>HashRouter</i>).</p>
			</div>
		);
	}
}

export default About;