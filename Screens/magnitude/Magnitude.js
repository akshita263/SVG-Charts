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
        <View style= {styles.mainContainer}>
            <ScrollView>
            <View style={styles.textContainer}>
                <Text style={[styles.intro, {paddingBottom: 10}]}> 
                    Magnitude Charts show size comparison. These can be relative (just being able to see
                    larger or bigger) or absolute (need to see fine differences). Usually these show a 
                    counted number (for example, barrels, dollars or people) rather than calculated 
                    percentage
                </Text>
                <Text style={[styles.intro, {paddingTop: 0}]}> 
                    EXAMPLE: Categorical subdivisions in no particular order, 
                    such as the sales volume by product code. A bar chart may be used for this comparison,
                    Commodity Products, market capitalisation.
                </Text>
            </View>
            <View style={[styles.textContainer, {borderBottomWidth: 0}]}>
                <Text style={[styles.head, {textAlign: 'center'}]}>MAGNITUDE CHARTS</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.sub}>
                    <TouchableOpacity style={styles.container}
                        onPress={() => navigation.navigate('Bar')}>
                        <View style={styles.listView}>
                            <Text style={styles.containerText}>
                                Bar Chart
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
                        onPress={() => navigation.navigate('Paired Bar')}>
                        <View style={styles.listView}>
                            <Text style={styles.containerText}>
                                Paired Bar Charts
                            </Text>                       
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Paired Column')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Paired Column Charts
                        </Text>                       
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={styles.homeBtn}
                    onPress={() => navigation.dangerouslyGetParent().goBack()} > 
                    <Icon name="home" size={30} style={styles.homeIcon} />
                    <Text  style={styles.homeText}>
                        Return To Home
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
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
      justifyContent: 'center',
      backgroundColor: '#40aaa8c9',
      borderBottomColor: 'white',
      borderBottomWidth: 0,
      margin:10,
      marginHorizontal: 20,
      borderRadius: 18,
      width: '40%',
      height: 170,
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
  
  


export default Magnitude;