import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import React from "react";
import Header from "./components/header";
import Sample from "./components/sample";
import Footer from "./components/footer";
import Body from "./components/body";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("Containers Header", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it("Containers Footer", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it("Contains Body", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Body)).toHaveLength(1);
  });
  it("Doesnt Contain Sample", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Sample)).not.toContain();
  });
});
