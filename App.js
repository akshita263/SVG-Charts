// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AreaChart from './Screens/AreaChart';

function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 18}} 
                  onPress={() => navigation.navigate('Area Chart')}>
                  Area Chart  
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Area Chart" >
          {props => <AreaChart />}
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