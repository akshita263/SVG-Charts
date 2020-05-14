import React from 'react'
import { BarChart, Grid, LineChart } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'


export default class BarChartEx extends React.PureComponent {
    render() {
        const fill = '#6497b1'
        const data1 = [50, 10, 40, 95]
        return (
            <View>
                <Text>
                    Standard Bar Charts display the ranks of values much easily when sorted into order.
                </Text>

                

                <TouchableOpacity style={styles.chart} onPress={()=> Alert.alert('Bar Chart' )}>
                <BarChart 
                style={{ height: 300 }} 
                data={data1} 
                svg={{ fill }} 
                contentInset={{ top: 20, bottom: 20 }}>
                    <LineChart
                        style={{ height: 300 }}
                        data={data1}
                        svg={{ stroke: '#035b96', strokeWidth: 4 }}
                        contentInset={{ top: 1, bottom: 1 }}>
                    </LineChart>
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

