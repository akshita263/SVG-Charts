import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default class AreaChartEx extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
        return (
            <View>
            <TouchableOpacity style={styles.chart}>
            <AreaChart 
                style={{ height: 300 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: '#035b9661', strokeWidth: 1 , stroke: '#035b96'}} >
                <Grid />
            </AreaChart>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

