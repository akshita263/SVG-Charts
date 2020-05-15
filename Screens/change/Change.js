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
import ColAndLine from './ColAndLine';

function ChangeScreen({navigation}) {
    
    return (
        <View style= {styles.mainContainer}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={[styles.intro, {paddingBottom: 10}]}> 
                        Change Over Time Charts gives emphasis on changing trends. These can be short 
                        (intra-day) movements or extending series traversing decades or centuries:
                        choosing the correct time period is important to provide suitable context
                        for the reader .
                    </Text>
                    <Text style={[styles.intro, {paddingTop: 0}]}> 
                        EXAMPLE: A single variable is captured over a period of time, such as 
                        the unemployment rate over a 10-year period. A line chart may be used to demonstrate the trend.
                    </Text>
                </View>
                <View style={[styles.textContainer, {borderBottomWidth: 0}]}>
                    <Text style={[styles.head, {textAlign: 'center'}]}>CHANGE OVER TIME CHARTS</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Line')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Line Chart
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Column')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Column Chart
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Area')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Area Charts
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Connected Scatter')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Connected Scatter Plot
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                    </View>    
                        <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('ColAndLine')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Column and Line Plot
                        </Text>                       
                    </View>
                </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.homeBtn}
                    onPress={() => navigation.dangerouslyGetParent().goBack()} > 
                    <Icon name="home" size={30} style={styles.homeIcon} />
                    <Text  style={styles.homeText}>
                        Return To Home
                    </Text>
            </TouchableOpacity>
        </View>
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
      <Stack.Screen name="ColAndLine" component={ColAndLine} />
      <Stack.Screen name="Connected Scatter" component={ConScatterPlot} />
    </Stack.Navigator> 
    
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1,
      backgroundColor: '#dbf3f896'
    },
    textContainer:{
      borderBottomColor:'grey',
      borderBottomWidth: 0.5
    },
    head:{
      padding: 20,
      paddingBottom: 0,
      fontFamily: 'times new roman',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#555'
    },
    intro:{
      fontSize: 20,
      fontFamily: 'times new roman',
      textAlign: 'justify',
      padding: 20,
      paddingTop: 10,
    },
    sub:{
      flexDirection: 'row',
      flex: 1,
      display : 'flex',
      justifyContent: 'space-evenly',
      paddingTop: 10
    },
    container:{ 
      padding: 15,
      backgroundColor: '#40aaa8c9',
      borderBottomColor: 'white',
      borderBottomWidth: 0,
      margin:10,
      marginHorizontal: 20,
      borderRadius: 18,
      width: '40%',
      height: 170,
      justifyContent: 'center',
      position: 'relative',
  },
  listView:{
      flexDirection: 'column',
      justifyContent: 'space-evenly',
  },
  containerText:{
      fontSize: 20, 
      textAlign: 'center' , 
      fontWeight: '900', 
      fontFamily: 'times new roman',
  },
  homeBtn:{
      backgroundColor: '#1b4e4e', 
    },
    homeIcon:{
      alignSelf:'flex-start', 
      position: 'absolute', 
      color: 'white',
      padding: 7,
      paddingLeft: 20
    },
    homeText:{
      alignItems: 'center',
      paddingVertical: 10,
      color: 'white', 
      alignSelf: 'flex-end',
      paddingLeft: 60,
      paddingTop: 10,
      width:'100%',
      height: 50,
      fontSize : 20,
    },
  });

export default Change;