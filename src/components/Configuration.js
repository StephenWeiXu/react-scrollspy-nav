import React, { Component } from "react";

class Configuration extends Component {
	render() {
		return (
			<div className="section-content">
				<h2>Configuration</h2>
				<div>
					<p>Props that can be passed to Component <b>ScrollspyNav</b> for configuration.</p>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
								<th>Description</th>
								<th>Example Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>scrollTargetIds</td>
								<td>Array</td>
								<td>List of scroll targets ids</td>
								<td>["section_1", "section_2", "section_3"]</td>
							</tr>
							<tr>
								<td>offset</td>
								<td>Number</td>
								<td>Offset pixels to the scrollTargetIds. Default is 0</td>
								<td>100</td>
							</tr>
							<tr>
								<td>activeNavClass</td>
								<td>String</td>
								<td>Class name for styling the nav link that's currently active</td>
								<td>"is-active"</td>
							</tr>
							<tr>
								<td>scrollDuration</td>
								<td>String</td>
								<td>Scroll duration for controlling how fast the nav click scrolls to its section. Default is "1000"</td>
								<td>"1000"</td>
							</tr>
							<tr>
								<td>headerBackground</td>
								<td>String</td>
								<td>If header has background color or not, for accurate scroll position, Default is "false"</td>
								<td>"true"</td>
							</tr>
							<tr>
								<td>router</td>
								<td>String</td>
								<td>The name of router used in react app if any</td>
								<td>"HashRouter"</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Configuration;