import React from 'react';
import 'react-native';
import LineChart from '../Screens/LineChart';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<LineChart />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});