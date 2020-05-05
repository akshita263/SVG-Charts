import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
 

export default class PieChartEx extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

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
            <View>
            <Text style={styles.title}>
                PIE CHART
            </Text>
            <TouchableOpacity style={styles.chart}>
            <PieChart style={{ height: 250 }} data={pieData} innerRadius="0%" padAngle={0.0174533} />
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

