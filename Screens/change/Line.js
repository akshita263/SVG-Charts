import React from 'react'
import { LineChart, Grid, Path } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default class LineChartEx extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        const Shadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={8}
                stroke={'rgba(134, 65, 244, 0.2)'}
            />
        )
 
        return (
            <View>
            <TouchableOpacity style={styles.chart}>
            <LineChart
                style={{ height: 250 }}
                data={data}
                svg={{ stroke: '#035b96', strokeWidth: 4 }}
                contentInset={{ top: 20, bottom: 20 }}>
                <Grid />
                <Shadow />
            </LineChart>
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

