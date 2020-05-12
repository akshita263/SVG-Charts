// In App.js in a new project
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AreaChart from './Screens/AreaChart';
import StackedArea from './Screens/StackedArea';
import Bar from './Screens/Bar';
import StackedBar from './Screens/StackedBar';
import LineChart from './Screens/LineChart';
import PieChart from './Screens/PieChart';
import Progress from './Screens/Progress';
import YAxis from './Screens/YAxis';
import XAxis from './Screens/XAxis';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Area Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Area Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Stacked Area Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Stacked Area Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Bar Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Bar Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Stacked Bar Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Stacked Bar Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Line Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Line Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Pie Chart')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Pie Chart  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Progress Circle')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Progress Circle  
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('Y-Axis')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  Y-Axis
                </Text>                       
            </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('X-Axis')}>
            <View style={styles.listView}>
                <Text style={{ fontSize: 20}}>
                  X-Axis
                </Text>                       
            </View>
      </TouchableOpacity>    
    </ScrollView>
  );
}


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStackScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="SVG CHARTS" component={HomeScreen} />
      <Stack.Screen name="Area Chart" >
        {props => <AreaChart />}
      </Stack.Screen>
      <Stack.Screen name="Stacked Area Chart" >
          {props => <StackedArea />}
        </Stack.Screen>
        <Stack.Screen name="Bar Chart" >
          {props => <Bar />}
        </Stack.Screen>
        <Stack.Screen name="Stacked Bar Chart" >
          {props => <StackedBar />}
        </Stack.Screen>
        <Stack.Screen name="Line Chart" >
          {props => <LineChart />}
        </Stack.Screen>
        <Stack.Screen name="Pie Chart" >
          {props => <PieChart />}
        </Stack.Screen>
        <Stack.Screen name="Progress Circle" >
          {props => <Progress />}
        </Stack.Screen>
        <Stack.Screen name="Y-Axis" >
          {props => <YAxis />}
        </Stack.Screen>
        <Stack.Screen name="X-Axis" >
          {props => <XAxis />}
        </Stack.Screen>
    </Stack.Navigator> 
);

const AreaChartScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Area Chart" >
        {props => <AreaChart />}
      </Stack.Screen>
    </Stack.Navigator>
);

const StackedAreaScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Stacked Area Chart" >
          {props => <StackedArea />}
      </Stack.Screen> 
    </Stack.Navigator>
);

const BarChartScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Bar Chart" >
          {props => <Bar />}
        </Stack.Screen>
    </Stack.Navigator>
);

const StackedBarScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Stacked Bar Chart" >
          {props => <StackedBar />}
        </Stack.Screen>
    </Stack.Navigator>
);

const LineChartScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Line Chart" >
          {props => <LineChart />}
        </Stack.Screen>
    </Stack.Navigator>
);

const PieChartScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Pie Chart" >
          {props => <PieChart />}
        </Stack.Screen>
    </Stack.Navigator>
);

const ProgressScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Progress Circle" >
          {props => <Progress />}
        </Stack.Screen>
    </Stack.Navigator>
);

const XAxisScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="X-Axis" >
          {props => <XAxis />}
        </Stack.Screen>
    </Stack.Navigator>
);

const YAxisScreen =({navigation}) =>(
  <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#ca787b',
      height: 80,
    },
    headerTintColor: 'white', 
    HeaderTitleStytle:{
      fontWeight: 'bold',
    },
    headerLeft: ()=>(
      <Icon.Button
        name='ios-menu' size={30} backgroundColor="#ca787b"
        onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }}>
      <Stack.Screen name="Y-Axis" >
          {props => <YAxis />}
        </Stack.Screen>
    </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={HomeStackScreen} />
        <Drawer.Screen name="Area Chart" component={AreaChartScreen}/>
        <Drawer.Screen name="Stacked Area Chart" component={StackedAreaScreen}/>
        <Drawer.Screen name="Bar Chart" component={BarChartScreen}/>
        <Drawer.Screen name="Stacked Bar Chart" component={StackedBarScreen}/>
        <Drawer.Screen name="Line Chart" component={LineChartScreen}/>
        <Drawer.Screen name="Pie Chart" component={PieChartScreen}/>
        <Drawer.Screen name="Progress Circle" component={ProgressScreen}/>
        <Drawer.Screen name="Y-Axis" component={YAxisScreen}/>
        <Drawer.Screen name="X-Axis" component={XAxisScreen}/>
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