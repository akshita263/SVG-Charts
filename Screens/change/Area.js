import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


export default class StackedAreaEx extends React.PureComponent {
    render() {
        const data = [
            {
                month: new Date(2015, 0, 1),
                apples: 3840,
                bananas: 1920,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 1, 1),
                apples: 1600,
                bananas: 1440,
                cherries: 960,
                dates: 400,
            },
            {
                month: new Date(2015, 2, 1),
                apples: 640,
                bananas: 960,
                cherries: 3640,
                dates: 400,
            },
            {
                month: new Date(2015, 3, 1),
                apples: 3320,
                bananas: 480,
                cherries: 640,
                dates: 400,
            },
        ]
        const colors = ['#03396c', '#005b96', '#6497b1', '#b3cde0']
        const keys = ['apples', 'bananas', 'cherries', 'dates']
        const svgs = [
            { onPress: () => console.log('apples') },
            { onPress: () => console.log('bananas') },
            { onPress: () => console.log('cherries') },
            { onPress: () => console.log('dates') },
        ]

        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>AREA CHART</Text>
                    <Text style={styles.intro}> 
                        Area charts should be used wih care- they are good at showing changes but seeing the 
                        change incomponent total is very difficult.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} >
                    <StackedAreaChart
                        style={{ height: 250 }}
                        data={data}
                        keys={keys}
                        colors={colors}
                        showGrid={false}
                        svgs={svgs}
                    />
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Area Chart avaialable in the 
                        react-native-svg-charts.
                    </Text>                        
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>Props Used</Text>
                    <Text style={styles.subHead}>data:</Text>
                    <Text style={styles.list}> 
                        An array of integers is passed as an object.
                    </Text>
                    <Text style={styles.subHead}>curveShape: </Text>
                    <Text style={styles.list}> 
                        A natural curve shape is given to the chart.
                    </Text>
                    <Text style={styles.subHead}>content inset: </Text>
                    <Text style={styles.list}> 
                        Fake Margins are set inside the chart to maintain clarity.
                        It can vary according to users choice. {'\n'}
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
