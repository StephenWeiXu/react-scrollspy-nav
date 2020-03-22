import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Example extends Component {
	constructor(props) {
		super(props);

		this.state = {content: ""};
	}

	componentDidMount() {
		fetch(`./markdown/example.md`)
			.then(response => response.text())
			.then(text => this.setState({content: text}))
	}

	buildExampleCode() {
		if (window.screen.availWidth > 1000) {
			return(<div className="code-block"><ReactMarkdown source={this.state.content} /></div>);
		} else {
			return(<div>Check out the code in Desktop screen</div>);
		}
	}

	render() {
		return (
			<div className="section-content">
				<h2>Example</h2>
				{this.buildExampleCode()}
			</div>
		);
	}
}

export default Example;	