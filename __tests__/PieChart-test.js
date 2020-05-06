import React from 'react';
import 'react-native';
import PieChart from '../Screens/PieChart';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<PieChart />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});