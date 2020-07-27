# react-scrollspy-nav

[![npm version](https://img.shields.io/npm/v/react-scrollspy-nav.svg?style=flat-square)](https://www.npmjs.com/package/react-scrollspy-nav)
[![travis](https://travis-ci.com/StephenWeiXu/react-scrollspy-nav.svg?branch=master)](https://travis-ci.com/github/StephenWeiXu/react-scrollspy-nav)
[![dependencies](http://img.shields.io/david/StephenWeiXu/react-scrollspy-nav.svg?style=flat-square)](https://github.com/StephenWeiXu/react-scrollspy-nav)
[![DevDependencies](http://img.shields.io/david/dev/StephenWeiXu/react-scrollspy-nav.svg?style=flat-square)](https://github.com/StephenWeiXu/react-scrollspy-nav)
[![License](http://img.shields.io/npm/l/react-scrollspy-nav.svg?style=flat-square)](https://github.com/StephenWeiXu/react-scrollspy-nav)
[![downloads](https://img.shields.io/npm/dm/react-scrollspy-nav.svg?style=flat-square)](https://www.npmjs.com/package/react-scrollspy-nav)

`react-scrollspy-nav` is a React component that provides smooth scrolling navigation to a web page. It also accounts for the factor that a React app may use different React router and therefore has different url patterns (for example the hash pathname in `HashRouter`).   

See the [Demo](https://stephenweixu.github.io/react-scrollspy-nav).

## Installation
```
npm i react-scrollspy-nav --save
```

## Usage
```
import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

class App extends Component {
    render() {
        return (
            <div>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#section_1">Section 1</a></li>
                        <li><a href="#section_2">Section 2</a></li>
                        <li><a href="#section_3">Section 3</a></li>
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

**Note:**

* The above code provides the skeleton for it to work. You need to style the nav and the target sections yourself to have better visual effect.
* `style={{"height": "500px"}}` on the section `div` here is only an example to put more height for each section `div` to make the page scrollable. Adjust it according to your needs.


## Props

Props that can be passed to Component `ScrollspyNav` for configuration.

| Name | Type | Description | Example Value |
|------|------|------| ------ |
| scrollTargetIds | Array | List of scroll target ids | ["section_1", "section_2", "section_3"] |
| offset | Number | Offset pixels to the scrollTargetIds. Default is 0 | 100 |
| activeNavClass | String | Class name for styling the nav link that's currently active | "is-active" |
| scrollDuration | String | Scroll duration for controlling how fast the nav click scrolls to its section. Default is "1000" | "1000" |
| headerBackground | String | If header has background color or not, for accurate scroll position, Default is "false" | "true" |
| router | String | The name of router used in react app if any | "HashRouter" |


## Local Development

```
$ git clone git@github.com:StephenWeiXu/react-scrollspy-nav.git
$ cd react-scrollspy-nav
$ npm install
$ npm run start
```
#### ScrollspyNav
The `ScrollspyNav` component is located at `src/lib/ScrollspyNav.js`. If you are thinking of contributing, that's likely the file you would want to udpate.

#### Example App
Open up `http://localhost:3000` to see the example app. The example app is rendered from `src/index.js`. It's a quick way to visually test out `react-scrollspy-nav` if you make any changes.

## Contributing
Feel free to [open an issue](https://github.com/StephenWeiXu/react-scrollspy-nav/issues/new), or create your pull request!

If this is your first time contributing to a github project, checkout a quick guide on [making you first contributions](https://github.com/firstcontributions/first-contributions).

