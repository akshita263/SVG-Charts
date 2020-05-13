// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Line from './Line';
import Area from './Area';
import Column from './Column';
import ConScatterPlot from './ConScatterPlot';


function ChangeScreen({navigation}) {
    
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
                onPress={() => navigation.navigate('Line')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Line Chart
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
                onPress={() => navigation.navigate('Area')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Area Charts
                    </Text>                       
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Connected Scatter')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Connected Scatter Plot
                    </Text>                       
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}


const Stack = createStackNavigator();


function Change() {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="Change" component={ChangeScreen} />
      <Stack.Screen name="Line" component={Line} />
      <Stack.Screen name="Column" component={Column} />
      <Stack.Screen name="Area" component={Area} />
      <Stack.Screen name="Connected Scatter" component={ConScatterPlot} />
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


export default Change;