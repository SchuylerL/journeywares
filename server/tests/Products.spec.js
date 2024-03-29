import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { Products } from '../../src/components/Products';
import SingleProduct from '../../src/components/SingleProduct';

configure({ adapter: new Adapter() });

const mockProducts = {
  productList: [{ key1: 'value1' }, { key2: 'value2' }, { key3: 'value3' }],
};
const match = {
  params: {
    baseId: 1,
  },
};
describe('<Products/>', () => {
  it('renders the Product component ', () => {
    const wrapper = shallow(<Products products={mockProducts} match={match} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Renders a Single Product component', () => {
    const wrapper = shallow(<Products products={mockProducts} match={match} />);
    expect(wrapper.find(SingleProduct)).toHaveLength(3);
  });
});
