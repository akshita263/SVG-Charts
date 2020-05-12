import React from 'react'
import { StackedBarChart } from 'react-native-svg-charts'
import Header from '../Component/Header';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
 

export default class StackedBarEx extends React.PureComponent {
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

        return (
            <ScrollView>
                <Text style={styles.title}>
                    STACKED BAR CHART: VERTICAL
                </Text>
                <TouchableOpacity style={styles.chart}>
                    <StackedBarChart
                        style={{ height: 300 }}
                        keys={keys}
                        colors={colors}
                        data={data}
                        showGrid={false}
                        contentInset={{ top: 10, bottom: 10 }}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    STACKED BAR CHART: HORIZONTAL
                </Text>
                <TouchableOpacity style={styles.chart}>
                    <StackedBarChart
                        style={{ height: 300 }}
                        keys={keys}
                        colors={colors}
                        data={data}
                        showGrid={false}
                        horizontal={true}
                        contentInset={{ left: 10, right: 10 }}
                    />
                </TouchableOpacity>
            </ScrollView>
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

