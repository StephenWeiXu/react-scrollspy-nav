```javascript
import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollspyNav
          scrollTargetIds={["section_1", "section_2", "section_3"]}
          activeNavClass="is-active"
        >
          <ul>
            <li><a href="/"><span>Home</span></a></li>
            <li><a href="#section_1"><span>Section 1</span></a></li>
            <li><a href="#section_2"><span>Section 2</span></a></li>
            <li><a href="#section_3"><span>Section 3</span></a></li>
          </ul>
        </ScrollspyNav>

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
