// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScatterPlot from './ScatterPlot';
import ConScatterPlot from './ConScatterPlot';


function CorrelationScreen({navigation}) {
    
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
                onPress={() => navigation.navigate('Scatter')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Scatter Plot
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


function Correlation() {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="Correlation" component={CorrelationScreen} />
      <Stack.Screen name="Scatter" component={ScatterPlot} />
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


export default Correlation;