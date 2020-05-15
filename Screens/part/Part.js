// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pie from './Pie';
import Donut from './Donut';
import StackedCol from './StackedCol';


function PartScreen({navigation}) {
    
    return (
        <View style= {styles.mainContainer}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={[styles.intro, {paddingBottom: 10}]}> 
                        Part to whole Charts shows how a particular entity can be broken down into
                        component elements. If the readers interest is solely in the size of the 
                        component consider a Magnitude Type Chart instead
                    </Text>
                    <Text style={[styles.intro, {paddingTop: 0}]}> 
                        EXAMPLE: subdivisions are measured as a ratio to the whole (i.e., a percentage out of 100%). 
                        A pie chart or bar chart can show the comparison of ratios, 
                        such as the market share represented by competitors in a market.
                    </Text>
                </View>
                <View style={[styles.textContainer, {borderBottomWidth: 0}]}>
                    <Text style={[styles.head, {textAlign: 'center'}]}>PART tO WHOLE CHARTS</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                        onPress={() => navigation.navigate('Pie')}>
                        <View style={styles.listView}>
                            <Text style={styles.containerText}>
                                Pie Chart
                            </Text>                       
                        </View>
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.container}
                        onPress={() => navigation.navigate('Donut')}>
                        <View style={styles.listView}>
                            <Text style={styles.containerText}>
                                Donut Chart
                            </Text>                       
                        </View>
                    </TouchableOpacity>
                    </View>
                        <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Stacked Column')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Stacked Column Charts
                        </Text>                       
                    </View>
                </TouchableOpacity>
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


function Part() {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="Part" component={PartScreen} />
      <Stack.Screen name="Pie" component={Pie} />
      <Stack.Screen name="Donut" component={Donut} />
      <Stack.Screen name="Stacked Column" component={StackedCol} />
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
  
  

export default Part;