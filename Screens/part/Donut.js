import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


export default class PieChartEx extends React.PureComponent {
    render() {
        const data = [50, 10, 35, 53, 24, 50, 20]

        const randomColor = () => (
            '#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
 
        const pieData = data.filter((value) => value > 0).map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
 
        return (
            <ScrollView style={styles.main}>
            <View style={styles.textContainer}>
                <Text style={styles.head}>DONUT CHART</Text>
                <Text style={styles.intro}> 
                    Similar to Pie Chart, but the center can be a good way of making space to include
                    additional information about the data.
                </Text>
            </View>

            <TouchableOpacity style={styles.chart} >
                 <PieChart 
                    style={{ height: 250 }} 
                    data={pieData} 
                    innerRadius="50%" 
                    padAngle={0.0174533} 
                />
            </TouchableOpacity>
        
            <View style={styles.textContainer}>
                <Text style={styles.intro}> 
                    This chart is build using a basic Pie Chart avaialable in the 
                    react-native-svg-charts. An external function is added that generates random colors and 
                    passed as the svg component. Therefore each time the servers is refreshed new colors are 
                    obtained.
                </Text>                        
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.head}>Props Used</Text>
                <Text style={styles.subHead}>data:</Text>
                <Text style={styles.list}> 
                    An array of integers is passed as an object.
                </Text>
                <Text style={styles.subHead}>innerRadius:</Text>
                <Text style={styles.list}> 
                     It determines the radius of the inner circle. and accepts a string of 
                     percentage. Here, it is set to 50%.
                </Text>
                <Text style={styles.subHead}>padAngle: </Text>
                <Text style={styles.list}> 
                    It accepts and an object that determines the angle between two components.
                </Text>
            </View>
        </ScrollView>
      
      )
    }
}


const styles = StyleSheet.create({
    main:{
        backgroundColor: '#dbf3f896'

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
        color: '#555',
        textAlign: 'center'
    },
    subHead:{
        fontSize: 25,
        fontFamily: 'times new roman',
        textAlign: 'justify',
        padding: 30,
        paddingTop: 10,
        paddingBottom: 0,
        fontWeight: 'bold',
        
    },
    intro:{
        fontSize: 20,
        fontFamily: 'times new roman',
        textAlign: 'justify',
        padding: 30,
        paddingTop: 10,
        paddingBottom: 10
    },
    list:{
        fontSize: 20,
        fontFamily: 'times new roman',
        textAlign: 'justify',
        paddingHorizontal: 30,
    },
    chart:{
        margin: 20,
        borderWidth: 5,
        padding: 10,
    },
    title: {
        fontSize: 30,
        padding:20,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});
