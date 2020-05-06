import React from 'react';
import 'react-native';
import StackedBar from '../Screens/StackedBar';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<StackedBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});