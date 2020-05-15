import React from 'react'
import { StackedBarChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import * as d3 from 'd3' ;

export default class StackedBarEx extends React.PureComponent {
    render() {
                const data = [
            {
                month: new Date(2015, 0, 1),
                Agree: 3840,
                NotAgree: -1920,
                Maybe: 960,
            },
            {
                month: new Date(2015, 1, 1),
                Agree: -1600,
                NotAgree: 1440,
                Maybe: -960,
            },
            {
                month: new Date(2015, 2, 1),
                Agree: -640,
                NotAgree: 960,
                Maybe: 3640,
            },
            {
                month: new Date(2015, 3, 1),
                Agree: 3320,
                NotAgree: -1480,
                Maybe: -640,
            },
        ]
        const colors = ['rgb(0, 155, 0)', 'rgb(205, 0, 0)', 'rgb(235, 130, 0)', ]
        const keys = ['Agree', 'NotAgree', 'Maybe', ]
        const svgs = [
            { onPress: () => console.log('Agree') },
            { onPress: () => console.log('NotAgree') },
            { onPress: () => console.log('Maybe') },
        ]

        return (
            <ScrollView style={styles.main}>
            <View style={styles.textContainer}>
                <Text style={styles.head}>SPINE CHART</Text>
                <Text style={styles.intro}> 
                    Spine Chart splits a single value into two contrasting elemnts.
                    Such as: Male-Female, True-False etc.                      
                </Text>
            </View>

            <TouchableOpacity style={styles.chart} >
                <StackedBarChart
                    style={{ height: 300 }}
                    keys={keys}
                    colors={colors}
                    data={data}
                    offset={d3.stackOffsetDiverging}
                    horizontal={true}
                    contentInset={{ left: 10, right: 10 }}
                >
                <Grid direction={Grid.Direction.VERTICAL}/>
                </StackedBarChart>
            </TouchableOpacity>
        
            <View style={styles.textContainer}>
                <Text style={styles.intro}> 
                    This chart is build using a basic Stacked Bar Chart avaialable in the 
                    react-native-svg-charts. But to show the contrast between the two elements.
                    One is given a positive value while the other element is said to negative.
                </Text>                        
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.head}>Props Used</Text>
                <Text style={styles.subHead}>data:</Text>
                <Text style={styles.list}> 
                    An array of integers is passed as an object.
                </Text>
                <Text style={styles.subHead}>colors:</Text>
                <Text style={styles.list}> 
                    an object that consist of different color for the different elements of the chartsis passed.

                 </Text>
                <Text style={styles.subHead}>offset:</Text>
                <Text style={styles.list}> 
                    The offset is set to diverging. This makes sure that the baseline seperated positive and negative values.
                </Text>
                <Text style={styles.subHead}horizontal >horizontal: </Text>
                <Text style={styles.list}> 
                    Horizontal is set to true because
                    Bar charts are horizontal and column charts are vertical.
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