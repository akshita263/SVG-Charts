import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Circle, Path } from 'react-native-svg'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'

class Proportional extends React.PureComponent {

    render() {

        const data = [ 2, 8, 2, 5, 3 ]
        data.sort(function(a, b){return a-b});
        
        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 11 * (value) }
                    stroke={ 'black' }
                    fill={ 'grey' }
                />
            ))
        }

        const Line = ({ line }) => (
            <Path
                d={ line }
                stroke={ 'rgba(134, 65, 244, 0)' }
                fill={ 'none' }
            />
        )

        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>ORDERED PROPRTIONAL CHART</Text>
                    <Text style={styles.intro}> 
                        Use when there are big variations between values and/or seeing fine differences 
                        between data is not so important.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart}>
                    <AreaChart
                        style={{ height: 300  }}
                        data={ data }
                        svg={{ fill: 'rgba(134, 65, 244, 0)' }}
                        contentInset={{ top: 20, bottom: 30 }}
                    >
                        <Grid/>
                        <Line/>
                        <Decorator/>
                    </AreaChart>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Bar Chart avaialable in the 
                        react-native-svg-charts. Just by applying a simple sorting algorithm
                        to the data set, that sorts the data into descending order.
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

export default Proportional

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#dbf3f896',
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
