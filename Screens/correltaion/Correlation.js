// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScatterPlot from './ScatterPlot';
import ConScatterPlot from './ConScatterPlot';
import Bubble from './Bubble';
import ColAndLine from './ColAndLine';

function CorrelationScreen({navigation}) {
    
    return (
        <View style= {styles.mainContainer}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={[styles.intro, {paddingBottom: 10}]}> 
                        Co-relation Charts show relationship between two or more variables. Be mindful 
                        that, unless you tell them otherwise, many readers will assume the relationships
                        you show them to be casual (i.e., one causes the other).

                    </Text>
                    <Text style={[styles.intro, {paddingTop: 0}]}> 
                        EXAMPLE: plotting unemployment (X) and inflation (Y) for a sample of months. 
                        A scatter plot is typically used for this message. Other related variables like
                        income, life expectancy.
                    </Text>
                </View>
                <View style={[styles.textContainer, {borderBottomWidth: 0}]}>
                    <Text style={[styles.head, {textAlign: 'center'}]}>CO-RELATION CHARTS</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                        onPress={() => navigation.navigate('Scatter')}>
                        <View style={styles.listView}>
                            <Text style={styles.containerText}>
                                Scatter Plot
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
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                        onPress={() => navigation.navigate('Bubble')}>
                        <View style={styles.listView}>
                            <Text style={styles.containerText}>
                                Bubble Plot
                            </Text>                       
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('ColAndLine')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Column and Line Plot
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


function Correlation() {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="Correlation" component={CorrelationScreen} />
      <Stack.Screen name="Scatter" component={ScatterPlot} />
      <Stack.Screen name="Bubble" component={Bubble} />
      <Stack.Screen name="Connected Scatter" component={ConScatterPlot} />
      <Stack.Screen name="ColAndLine" component={ColAndLine} />
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
      justifyContent: 'center',
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
  


export default Correlation;