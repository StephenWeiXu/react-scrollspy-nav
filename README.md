#react-scrollspy-nav

`react-scrollspy-nav` is a React component that provides smooth scrolling navigation to the page. It also acconuts for the factor that a React app may use different React router and therefore has different url patterns (for example the hash pathname in `HashRouter`).   

##Installation
`npm install --save react-scrollspy-nav`

##Usage
```
import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<ScrollspyNav scrollTargetIds={["section_1", "section_2", "section_3"]} activeNavClass="is-active">
					    <li><a href="/"><span>Home</span></a></li>
					    <li><a href="#section_1"><span>Section 1</span></a></li>
					    <li><a href="#section_2"><span>Section 2</span></a></li>
					    <li><a href="#section_3"><span>Section 3</span></a></li>
					</ScrollspyNav>
				</div>
				
				<div>
					<div style={{"height": "400px"}}><span>Welcome!</span></div>
					<div id="section_1" style={{"height": "500px"}}><span>Section 1</span></div>
					<div id="section_2" style={{"height": "500px"}}><span>Section 2</span></div>
					<div id="section_3" style={{"height": "500px"}}><span>Section 3</span></div>
				</div>
			</div>
		);
	}
}

export default App;	
		
```

**Notes**

* The above code provides the skeleton for it to work. You need to style the nav and the target sections yourself to achieve better effect
* `style={{"height": "500px"}}` here is only an example to put more height for each section `div` to make the page scrollable


##Props

Props that can be passed to Component `ScrollspyNav` for configuration.

| Name | Type | Description | Example Value |
|------|------|------| ------ |
| scrollTargetIds | Array | List of scroll targets ids | ["section_1", "section_2", "section_3"] |
| activeNavClass | String | Class name for styling the nav link that's currently active | "is-active" |
| router | String | The name of router used in react app if any | "HashRouter" |

