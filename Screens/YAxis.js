import React from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
 

export default class YAxisEx extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        const contentInset = { top: 20, bottom: 20 }
 
        return (
            <View>
            <Text style={styles.title}>
                Y-AXIS
            </Text>
            <TouchableOpacity style={styles.chart}>
                <View style={{ height: 300, flexDirection: 'row' }}>
                    <YAxis
                        data={data}
                        contentInset={contentInset}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={(value) => `${value}ºC`}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={data}
                        svg={{ stroke: '#035b96', strokeWidth: 4 }}
                        contentInset={contentInset}
                    >
                        <Grid />
                    </LineChart>
                </View>
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

