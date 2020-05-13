import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'


export default class BarChartEx extends React.PureComponent {
    render() {
        const fill = '#6497b1'
        const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
        
        return (
            <View>
                <Text>
                    Standard Bar Charts display the ranks of values much easily when sorted into order.
                </Text>

                <TouchableOpacity style={styles.chart} onPress={()=> Alert.alert('Bar Chart' )}>
                <BarChart 
                style={{ height: 300 }} 
                data={data} 
                svg={{ fill }} 
                horizontal={true}
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

