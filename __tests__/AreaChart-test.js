import React from 'react';
import 'react-native';
import AreaChart from '../Screens/AreaChart';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<AreaChart />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});