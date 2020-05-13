import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderedBar from './OrderedBar';
import OrderedCol from './OrderedCol'

const Stack = createStackNavigator();

function RankingScreen({navigation}) {
    
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
                onPress={() => navigation.navigate('Ordered Bar')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Ordered Bar Chart
                    </Text>                       
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Ordered Column')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Ordered Column Chart
                    </Text>                       
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Slope')}>
                <View style={styles.listView}>
                    <Text style={{ fontSize: 20}}>
                        Slope Chart
                    </Text>                       
                </View>
            </TouchableOpacity>
        </ScrollView>
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
      <Stack.Screen name="Ordered Column" component={OrderedCol} />

    </Stack.Navigator> 
    </NavigationContainer>
    )
}

export default Ranking

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
})
