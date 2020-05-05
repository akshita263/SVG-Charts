// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AreaChart from './Screens/AreaChart';
import StackedArea from './Screens/StackedArea';
import Bar from './Screens/Bar';
import StackedBar from './Screens/StackedBar';
import LineChart from './Screens/LineChart';
import PieChart from './Screens/PieChart';
import Progress from './Screens/Progress';
import YAxis from './Screens/YAxis';
import XAxis from './Screens/XAxis';

function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Area Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Area Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Stacked Area Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Stacked Area Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Bar Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Bar Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Stacked Bar Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Stacked Bar Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Line Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Line Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Pie Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Pie Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Progress Circle')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Progress Circle  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Y-Axis')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Y-Axis
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('X-Axis')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  X-Axis
                </Text>                       
            </View>
      </TouchableOpacity>

        
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#dfa290',
          height: 80,
        },
        headerTintColor: 'white', 
        HeaderTitleStytle:{
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name="SVG CHARTS" component={HomeScreen} />
        <Stack.Screen name="Area Chart" >
          {props => <AreaChart />}
        </Stack.Screen>
        <Stack.Screen name="Stacked Area Chart" >
          {props => <StackedArea />}
        </Stack.Screen>
        <Stack.Screen name="Bar Chart" >
          {props => <Bar />}
        </Stack.Screen>
        <Stack.Screen name="Stacked Bar Chart" >
          {props => <StackedBar />}
        </Stack.Screen>
        <Stack.Screen name="Line Chart" >
          {props => <LineChart />}
        </Stack.Screen>
        <Stack.Screen name="Pie Chart" >
          {props => <PieChart />}
        </Stack.Screen>
        <Stack.Screen name="Progress Circle" >
          {props => <Progress />}
        </Stack.Screen>
        <Stack.Screen name="Y-Axis" >
          {props => <YAxis />}
        </Stack.Screen>
        <Stack.Screen name="X-Axis" >
          {props => <XAxis />}
        </Stack.Screen>
      </Stack.Navigator>
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