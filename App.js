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

function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Area Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}}>
                  Area Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Stacked Area Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}}>
                  Stacked Area Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Bar Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}}>
                  Bar Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Stacked Bar Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}}>
                  Stacked Bar Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Line Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}}>
                  Line Chart  
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
          backgroundColor: '#283655',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{ 
    padding: 15,
    backgroundColor: '#dfe3ee',
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