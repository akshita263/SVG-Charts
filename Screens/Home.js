import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Deviation from './deviation/Deviation'


function HomeScreen({ navigation }) {
    return (
      <ScrollView style={styles.main}>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Deviation')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Deviation  
                  </Text>                       
              </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const Stack = createStackNavigator();

  function Home() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Deviation" component={Deviation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 300,
    },
    header:{
        fontSize: 50,
        fontWeight: 'bold',
    },
    subhead:{
        fontSize: 30,
    },
    text:{
        fontSize:20,
    }

})

export default HomeScreen;