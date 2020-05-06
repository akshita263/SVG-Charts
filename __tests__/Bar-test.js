import React from 'react';
import 'react-native';
import Bar from '../Screens/Bar';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Bar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});