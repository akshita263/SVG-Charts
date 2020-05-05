import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
 

export default class ProgressEx extends React.PureComponent {
    render() {
 
        return (
            <View>
            <Text style={styles.title}>
                PROGRESS CIRCLE
            </Text>
            <TouchableOpacity style={styles.chart}>
            <ProgressCircle 
            style={{ height: 250 }}
             progress={0.7} 
             progressColor={'#6497b1'} 
             backgroundColor= '#eee'
             strokeWidth= {30}
             cornerRadius= {5}

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
        padding: 30,
    },
    title: {
        fontSize: 30,
        padding:20,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});

