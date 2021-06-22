import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import CrossIcon from './CrossIcon';
describe("cross icon rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<CrossIcon />);
  });
  it("should render without errors", () => {
    expect(wrapper).toHaveLength(1);
  });
})