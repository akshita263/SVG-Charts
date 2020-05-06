import React from 'react';
import 'react-native';
import Progress from '../Screens/Progress';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Progress />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});