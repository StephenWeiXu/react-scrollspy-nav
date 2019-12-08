# react-scrollspy-nav

`react-scrollspy-nav` is a React component that provides smooth scrolling navigation to the page. It also accounts for the factor that a React app may use different React router and therefore has different url patterns (for example the hash pathname in `HashRouter`).   

See the [Demo](https://StephenWeiXu.github.io/react-scrollspy-nav-example).

## Installation
`npm -i react-scrollspy-nav`

## Usage
```
import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <ScrollspyNav
                        scrollTargetIds={["section_1", "section_2", "section_3"]}
                        offset={100}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                        <ul>
                            <li><a href="/"><span>Home</span></a></li>
                            <li><a href="#section_1"><span>Section 1</span></a></li>
                            <li><a href="#section_2"><span>Section 2</span></a></li>
                            <li><a href="#section_3"><span>Section 3</span></a></li>
                        </ul>
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


## Props

Props that can be passed to Component `ScrollspyNav` for configuration.

| Name | Type | Description | Example Value |
|------|------|------| ------ |
| scrollTargetIds | Array | List of scroll targets ids | ["section_1", "section_2", "section_3"] |
| offset | Number | offset pixels to the scrollTargetIds. Default is 0 | 100 |
| activeNavClass | String | Class name for styling the nav link that's currently active | "is-active" |
| scrollDuration | String | Scroll duration for controlling how fast the nav click scrolls to its section. Default is "1000" | "1000" |
| headerBackground | String | If header has background color or not, for accurate scroll position, Default is "false" | "true" |
| router | String | The name of router used in react app if any | "HashRouter" |

