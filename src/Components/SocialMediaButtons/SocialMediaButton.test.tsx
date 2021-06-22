import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SocialMediaButtons from './SocialMediaButtons';
describe("social media icons", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SocialMediaButtons />);
  });
  it('it should render without erros', () => {
    expect(wrapper).toHaveLength(1);
  });
})