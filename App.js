// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView , BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Ranking from './Screens/ranking/Ranking';
import Deviation from './Screens/deviation/Deviation';
import Correlation from './Screens/correltaion/Correlation';
import Change from './Screens/change/Change';
import Magnitude from './Screens/magnitude/Magnitude';
import Part from './Screens/part/Part';
import Home from './Screens/Home';


function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.main}>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Deviation')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Deviation Charts
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Ranking')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Ranking Charts 
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Magnitude')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Magintude Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Change')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Change Over Time Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Correlation')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Co-relation Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Part')}>
              <View style={styles.listView}>
                  <Text style={{ fontSize: 20}}>
                    Part-To-Whole Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
    </ScrollView>
  );
}


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackScreen =({navigation}) =>(
  <Stack.Navigator  screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e" padding={ 20}
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="SVG CHARTS" component={HomeScreen} />
      <Stack.Screen name="Deviation" component={Deviation} />
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="Magnitude" component={Magnitude} />
      <Stack.Screen name="Change" component={Change} />
      <Stack.Screen name="Correlation" component={Correlation} />
      <Stack.Screen name="Part" component={Part} />

    </Stack.Navigator> 
);

const DeviationScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
    <Stack.Screen name="Deviation" component={Deviation} />
  </Stack.Navigator>
);

const RankingScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
    <Stack.Screen name="Ranking" component={Ranking} />
  </Stack.Navigator>
);

const MagnitudeScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
    <Stack.Screen name="Magnitude" component={Magnitude} />
  </Stack.Navigator>
);

const ChangeScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
    <Stack.Screen name="Change" component={Change} />
  </Stack.Navigator>
);

const CorrelationScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
    <Stack.Screen name="Correlation" component={Correlation} />
  </Stack.Navigator>
);

const PartScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#900c3e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#900c3e"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
    <Stack.Screen name="Part" component={Part} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={HomeStackScreen} />
        <Drawer.Screen name="Deviation Charts" component={DeviationScreen} />
        <Drawer.Screen name="Ranking Charts" component={RankingScreen} />
        <Drawer.Screen name="Magnitude Charts" component={MagnitudeScreen} />
        <Drawer.Screen name="Change Over Time Charts" component={ChangeScreen} />
        <Drawer.Screen name="Co-relation Charts" component={CorrelationScreen} />
        <Drawer.Screen name="Part-To-Whole Charts" component={PartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white'
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


export default App;