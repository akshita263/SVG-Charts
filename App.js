// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home'
import AreaChart from './Screens/AreaChart';
import StackedArea from './Screens/StackedArea';
import Bar from './Screens/Bar';
import StackedBar from './Screens/StackedBar';
import LineChart from './Screens/LineChart';
import PieChart from './Screens/PieChart';
import Progress from './Screens/Progress';
import YAxis from './Screens/YAxis';
import XAxis from './Screens/XAxis';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#ca787b',
          height: 80,
        },
        headerTintColor: 'white', 
        HeaderTitleStytle:{
          fontWeight: 'bold',
        }
      }}>
        <Drawer.Screen name="HOME">
          {props => <Home />}
        </Drawer.Screen>
        <Drawer.Screen name="Area Chart" >
          {props => <AreaChart />}
        </Drawer.Screen>
        <Drawer.Screen name="Stacked Area Chart" >
          {props => <StackedArea />}
        </Drawer.Screen>
        <Drawer.Screen name="Bar Chart" >
          {props => <Bar />}
        </Drawer.Screen>
        <Drawer.Screen name="Stacked Bar Chart" >
          {props => <StackedBar />}
        </Drawer.Screen>
        <Drawer.Screen name="Line Chart" >
          {props => <LineChart />}
        </Drawer.Screen>
        <Drawer.Screen name="Pie Chart" >
          {props => <PieChart />}
        </Drawer.Screen>
        <Drawer.Screen name="Progress Circle" >
          {props => <Progress />}
        </Drawer.Screen>
        <Drawer.Screen name="Y-Axis" >
          {props => <YAxis />}
        </Drawer.Screen>
        <Drawer.Screen name="X-Axis" >
          {props => <XAxis />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{ 
    padding: 15,
    backgroundColor: '#ffe9dc',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
},
listView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
},

});


export default App;