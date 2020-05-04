import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
 

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
            <View>
            <Text style={styles.title}>
                STACKED AREA CHART
            </Text>
            <TouchableOpacity style={styles.chart}>
            <StackedAreaChart
                style={{ height: 250 }}
                data={data}
                keys={keys}
                colors={colors}
                curve={shape.curveNatural}
                showGrid={false}
                svgs={svgs}
            />
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chart:{
        margin: 20,
        borderWidth: 5,
        padding: 8,
    },
    title: {
        fontSize: 30,
        padding:20,
        alignSelf: 'center',
    }
});

