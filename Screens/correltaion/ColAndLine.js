import React from 'react'
import { BarChart, Grid, LineChart } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


export default class BarChartEx extends React.PureComponent {
    render() {
        const fill = 'black'
        const data = [50, 10, 40, 95]
        return (
                <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>COLUMN AND LINE CHART</Text>
                    <Text style={styles.intro}> 
                        A good way of showing relationship over time between- an amount (column)
                        and rate (line).
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} onPress={()=> Alert.alert('Bar Chart' )}>
                    <BarChart 
                        style={{ height: 300 }} 
                        data={data} 
                        svg={{ fill }} 
                        contentInset={{ top: 20, bottom: 20 }}>
                            <LineChart
                                style={{ height: 300 }}
                                data={data}
                                svg={{ stroke: 'grey', strokeWidth: 4 }}
                                contentInset={{ top: 1, bottom: 1 }}>
                            </LineChart>
                            <Grid />
                    </BarChart>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Bar Chart and line Chart avaialable in the 
                        react-native-svg-charts, and nesting the two in one another.
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
                        an object that determines the color of the chart is passed.
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

