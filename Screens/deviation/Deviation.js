// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DivergingBar from './DivergingBar'



function DeviationScreen({navigation}) {
    
    return (
        <View style= {styles.mainContainer}>
            <ScrollView>
            <View style={styles.textContainer}>
                <Text style={[styles.intro, {paddingBottom: 10}]}> 
                    Deviation Charts emphasise variations (+/-) from a fixed refereence point.
                    Typically the reference point id zero but it can also be a target or a long term 
                    average value. Can also be used to show sentiments (positive/ negtive /neutral).
                </Text>
                <Text style={[styles.intro, {paddingTop: 0}]}> 
                    EXAMPLE: Comparison of actual vs. budget expenses for several departments of a
                     business for a given time period. A bar chart can show comparison of the actual 
                     versus the reference amount.
                </Text>
            </View>
            <View style={[styles.textContainer, {borderBottomWidth: 0}]}>
                <Text style={[styles.head, {textAlign: 'center'}]}>DEVIATION CHARTS</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.sub}>
                <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Diverging Bar')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Diverging Bar Chart
                        </Text>                       
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Diverging Stacked')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Diverging Stacked Bar Chart
                        </Text>                       
                    </View>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.container}
                    onPress={() => navigation.navigate('Spine')}>
                    <View style={styles.listView}>
                        <Text style={styles.containerText}>
                            Spine Chart
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

function Deviation() {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
      <Stack.Screen name="DEVIATION" component={DeviationScreen} />
      <Stack.Screen name="Diverging Bar" component={DivergingBar} >
      </Stack.Screen>
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
    justifyContent: 'center',
    padding: 15,
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


export default Deviation;