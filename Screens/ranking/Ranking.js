import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderedBar from './OrderedBar';
import OrderedCol from './OrderedCol';
import Proportional from './Proportional';

const Stack = createStackNavigator();

function RankingScreen({navigation}) {
    
    return (
        <View style= {styles.mainContainer}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={[styles.intro, {paddingBottom: 10}]}> 
                        Ranking Charts are used where an items position in an ordered list is mpre 
                        important than its absolute or relative value. Don't be afraid to highlight 
                        the point interest.
                    </Text>
                    <Text style={[styles.intro, {paddingTop: 0}]}> 
                        EXAMPLE: subdivisions are ranked in ascending or descending order, such as 
                        a ranking of sales performance (the measure) by sales persons (the category, 
                        with each sales person a categorical subdivision) during a single period
                    </Text>
                </View>
                <View style={[styles.textContainer, {borderBottomWidth: 0}]}>
                    <Text style={[styles.head, {textAlign: 'center'}]}>RANKING CHARTS</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Ordered Bar')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Ordered Bar Chart
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Ordered Column')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Ordered Column Chart
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sub}>
                        <TouchableOpacity style={styles.container}
                            onPress={() => navigation.navigate('Slope')}>
                            <View style={styles.listView}>
                                <Text style={styles.containerText}>
                                    Slope Chart
                                </Text>                       
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Proportional')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Ordered Proportional Chart
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

function Ranking() {
    return (
        <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="RANKING" component={RankingScreen} />
      <Stack.Screen name="Ordered Bar" component={OrderedBar} />
      <Stack.Screen name="Proportional" component={Proportional} />
    </Stack.Navigator> 
    </NavigationContainer>
    )
}

export default Ranking

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1,
      backgroundColor: '#dbf3f896',
    },
    textContainer:{
      borderBottomColor:'grey',
      borderBottomWidth: 0.5,
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
    alignContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      backgroundColor: '#40aaa8c9',
      borderBottomColor: 'white',
      borderBottomWidth: 0,
      margin:10,
      marginHorizontal: 20,
      borderRadius: 18,
      width: '40%',
      height: 150,
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
  
  