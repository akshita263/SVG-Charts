// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView , BackHandler, Image} from 'react-native';
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
import Bar from './Screens/Bar';

function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.main} >
        <View style={styles.textContainer}>
          <Text style={styles.head}>DATA VISUALIZATION</Text>
          <Text style={styles.intro}> 
            Data visualization is both an art and a science. It is viewed as a branch of descriptive 
            statistics by some, but also as a grounded theory development tool by others. Increased amounts
            of data created by Internet activity and an expanding number of sensors in the environment are
            referred to as "big data" or Internet of things.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.intro}> 
            But there are so many waysto visualise data, and to choose the most appropriate way to 
            represent data from a particular data set. Consider the following categories to decide
            which data reelationship is most important in your story, Then look at the different types of 
            Charts within the categories to form initial idea about what might be working best.
            This is not meant to be exhaustive nor a wizard, but is a useful starting point for making 
            informative and meaningful visualization,
          </Text>
        </View>
        <View>
          <Text style={[{textAlign: 'center'}, styles.head]}>CATEGORIES</Text>
        </View>
        <View style={styles.sub}> 
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Deviation')}>
              <View style={styles.listView}>
                  <Text style={styles.text}>
                    Deviation Charts
                    
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Ranking')}>
              <View style={styles.listView}>
                  <Text style={styles.text}>
                    Ranking Charts 
                  </Text>                       
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.sub}>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Magnitude')}>
              <View style={styles.listView}>
                  <Text style={styles.text}>
                    Magintude Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Change')}>
              <View style={styles.listView}>
                  <Text style={styles.text}>
                    Change Over Time Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.sub}>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Correlation')}>
              <View style={styles.listView}>
                  <Text style={styles.text}>
                    Co-relation Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate('Part')}>
              <View style={styles.listView}>
                  <Text style={styles.text}>
                    Part To Whole Charts  
                  </Text>                       
              </View>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
}


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackScreen =({navigation}) =>(
  <Stack.Navigator  screenOptions={{
    headerStyle:{
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e" padding={ 20}
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="PLOTS AND CHARTS" component={HomeScreen} />
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
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e"
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
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e"
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
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e"
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
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e"
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
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e"
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
      backgroundColor: '#1b4e4e',
      height: 70,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#1b4e4e"
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
    backgroundColor:'#dbf3f896',
    padding: 20,
    paddingTop: 0,
  },
  sub:{
    flexDirection: 'row',
    flex: 1,
    display : 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 10
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
  container:{ 
    padding: 15,
    backgroundColor: '#40aaa8c9',
    borderBottomColor: 'white',
    borderBottomWidth: 0,
    margin:10,
    marginHorizontal: 20,
    borderRadius: 18,
    width: '42%',
    height: 160,
    position: 'relative',
},
listView:{
    flexDirection: 'column',
    justifyContent: 'space-between',
},
text:{ 
  fontSize: 23, 
  textAlign: 'center' , 
  fontWeight: '900', 
  fontFamily: 'times new roman',
}
});


export default App;