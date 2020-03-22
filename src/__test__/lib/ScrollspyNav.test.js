import React from 'react';
import ScrollspyNav from '../../lib/ScrollspyNav';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

document.body.innerHTML ="<div data-nav='list'></div>"

let simpleScrollspyNavComponent;

describe("ScrollspyNav tests", () => {
  beforeEach(() => {
    simpleScrollspyNavComponent = (
      <ScrollspyNav
        scrollTargetIds={["section_1"]}
        activeNavClass="is-active"
      >
        <ul>
          <li><a href="#section_1">Section 1</a></li>
        </ul>
      </ScrollspyNav>
    );
  })

  it("renders without crashing", () => {
    expect(() => shallow(simpleScrollspyNavComponent)
    ).not.toThrow();
  });

  it("creates the correct snapshot", () => {
    const ScrollspyNavComponent = renderer.create(simpleScrollspyNavComponent).toJSON();
    expect(ScrollspyNavComponent).toMatchSnapshot();
  });

  it("renders with correct children", () => {
    const wrapper = shallow(
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2", "section_3"]}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
        router="HashRouter"
      >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#section_1">Section 1</a></li>
          <li><a href="#section_2">Section 2</a></li>
          <li><a href="#section_3">Section 3</a></li>
        </ul>
      </ScrollspyNav>
    );

    expect(wrapper.find("ul")).not.toBeNull();
    expect(wrapper.find("ul").find("li").length).toEqual(4);
  });
});
