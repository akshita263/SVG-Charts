import React from 'react';
import 'react-native';
import StackedArea from '../Screens/StackedArea';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<StackedArea />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});