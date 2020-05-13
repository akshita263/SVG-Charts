// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bar from './Bar';
import Column from './Column';
import PairedBar from './PairedBar';
import PairedCol from './PairedCol';

function MagnitudeScreen({navigation}) {
    
    return (
    
        <ScrollView style={styles.main}>
            <TouchableOpacity> 
                <Text  style={styles.home}
                onPress={() => navigation.dangerouslyGetParent().goBack()} >
                    <Icon name="home" size={30} style={{alignSelf:'flex-end'}} />
                    Return To Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Bar')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Bar Chart
                    </Text>                       
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Column')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Column Chart
                    </Text>                       
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Paired Bar')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Paired Bar Charts
                    </Text>                       
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Paired Column')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Paired Column Charts
                    </Text>                       
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}


const Stack = createStackNavigator();


function Magnitude() {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="Magnitude" component={MagnitudeScreen} />
      <Stack.Screen name="Bar" component={Bar} />
      <Stack.Screen name="Column" component={Column} />
      <Stack.Screen name="Paired Bar" component={PairedBar} />
      <Stack.Screen name="Paired Column" component={PairedCol} />
    </Stack.Navigator> 
    
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white'
  },
  home:{
    backgroundColor: '#900c3e', 
    color: 'white', 
    alignSelf: 'flex-end',
    paddingLeft: 20,
    width:'100%',
    fontSize : 20,
  },
  container:{ 
    padding: 15,
    backgroundColor: '#ffe9dc',
    borderBottomColor: 'white',
    borderBottomWidth: 0,
    margin:7,
    marginHorizontal: 7
},
listView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
},

});


export default Magnitude;