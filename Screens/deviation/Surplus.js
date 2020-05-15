import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


export default class AreaChartEx extends React.PureComponent {
    render() {
        const data = [30, 40, 10, 70, 80, 90, 40, 150, 10, 60, 20, 50, 10, -30, -10, -70, -40, -100, 
            -80, -16, -70, -30,  -100, -40, 40, 60, 70, 90]
 
        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>SURPLUS / DEFICIT CHART</Text>
                    <Text style={styles.intro}> 
                        The shaded area of these charts allows a balance to be shown- either against a 
                        baseline or between two series.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} 
                    onPress={()=> Alert.alert('The data used for this Chart:', '50, -60, 70, -30, 40, -70' )}>
                    <AreaChart 
                    style={{ height: 300 }}
                    data={data}
                    contentInset={{ top: 30, bottom: 30 }}
                    svg={{ fill: 'black', strokeWidth: 1 , stroke: '#035b96'}} >
                    <Grid />
                </AreaChart>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Area Chart avaialable in the 
                        react-native-svg-charts.
                    </Text>                        
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>Props Used</Text>
                    <Text style={styles.subHead}>data:</Text>
                    <Text style={styles.list}> 
                        An array of integers is passed as an object.
                    </Text>
                    <Text style={styles.subHead}>svg:</Text>
                    <Text style={styles.list}> 
                        It accepts various children props but here, 
                        an object that determines the color of the chart is passed. and the width of the storke.
                    </Text>
                    <Text style={styles.subHead}>content inset: </Text>
                    <Text style={styles.list}> 
                        Fake Margins are set inside the chart to maintain clarity.
                        It can vary according to users choice. {'\n'}
                    </Text>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#dbf3f896'

    },
    textContainer:{
        borderBottomColor:'grey',
        borderBottomWidth: 0.5,
    },
    head:{
        padding: 20,
        paddingBottom: 0,
        fontFamily: 'times new roman',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#555',
        textAlign: 'center'
    },
    subHead:{
        fontSize: 25,
        fontFamily: 'times new roman',
        textAlign: 'justify',
        padding: 30,
        paddingTop: 10,
        paddingBottom: 0,
        fontWeight: 'bold',
        
    },
    intro:{
        fontSize: 20,
        fontFamily: 'times new roman',
        textAlign: 'justify',
        padding: 30,
        paddingTop: 10,
        paddingBottom: 10
    },
    list:{
        fontSize: 20,
        fontFamily: 'times new roman',
        textAlign: 'justify',
        paddingHorizontal: 30,
    },
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


