import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Header from '../Component/Header';


export default class BarChartEx extends React.PureComponent {
    render() {
        const fill = '#6497b1'
        const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
  
        return (
            <View>
            <TouchableOpacity style={styles.chart}>
            <BarChart 
            style={{ height: 300 }} 
            data={data} 
            svg={{ fill }} 
            contentInset={{ top: 20, bottom: 20 }}>
                <Grid />
            </BarChart>
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

