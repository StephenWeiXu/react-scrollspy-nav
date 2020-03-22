import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import ScrollspyNav from "./lib/ScrollspyNav";
import About from "./components/About";
import Usage from "./components/Usage";
import Example from "./components/Example";
import Configuration from "./components/Configuration";


class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return(
        // <div>
        //   <div className="nav">
        //     <ScrollspyNav
        //       scrollTargetIds={["section_1", "section_2", "section_3"]}
        //       activeNavClass="is-active"
        //       scrollDuration="1000"
        //       headerBackground="true"
        //     >
        //         <ul>
        //           <li><a href="/"><span>Home</span></a></li>
        //           <li><a href="#section_1"><span>Usage</span></a></li>
        //           <li><a href="#section_2"><span>Example</span></a></li>
        //           <li><a href="#section_3"><span>Configuration</span></a></li>
        //         </ul>
        //     </ScrollspyNav>
        //   </div>

        //   <div className="content">
        //       <div id="header"><About /></div>
        //       <div id="section_1"><Usage /></div>
        //       <div id="section_2"><Example /></div>
        //       <div id="section_3"><Configuration /></div>
        //   </div>
        // </div>

        // Use HashRouter
        <HashRouter>
          <div>
            <div className="nav">
              <ScrollspyNav
                scrollTargetIds={["section_1", "section_2", "section_3"]}
                activeNavClass="is-active"
                scrollDuration="1000"
                headerBackground="true"
                router="HashRouter"
              >
                <ul>
                  <li><NavLink to="/"><span>Home</span></NavLink></li>
                  <li><NavLink to="#section_1"><span>Usage</span></NavLink></li>
                  <li><NavLink to="#section_2"><span>Example</span></NavLink></li>
                  <li><NavLink to="#section_3"><span>Configuration</span></NavLink></li>
                </ul>
              </ScrollspyNav>
            </div>

            <div className="content">
                <div id="header"><span><About /></span></div>
                <div id="section_1"><span><Usage /></span></div>
                <div id="section_2"><span><Example /></span></div>
                <div id="section_3"><span><Configuration /></span></div>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default App;
