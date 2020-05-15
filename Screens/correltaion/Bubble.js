import React from 'react'
import { AreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { Circle, Path } from 'react-native-svg'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


class DecoratorExample extends React.PureComponent {

    render() {

        const data = [ 7, 9, 10, 8, 5]
        

        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 10 * (value) }
                    stroke={ 'black' }
                    fill={ 'rgba(0, 0, 0, 0.3)' }
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
                <Text style={styles.head}>BUBBLE PLOT</Text>
                <Text style={styles.intro}> 
                    Like Scatter Plot, but adds additional detail by sizing the circles
                    according to a third variable.
                </Text>
            </View>

            <TouchableOpacity style={styles.chart}>
                    <AreaChart
                        style={{ height: 300 , width: 350}}
                        data={ data }
                        svg={{ fill: 'rgba(134, 65, 244, 0)' }}
                        contentInset={{ top: 10, bottom: 30 }}
                    >
                        <Grid/>
                        <Line/>
                        <Decorator/>
                    </AreaChart>               
            </TouchableOpacity>
        
            <View style={styles.textContainer}>
                <Text style={styles.intro}> 
                    This chart is build using a basic Area Chart avaialable in the 
                    react-native-svg-charts, along with other components available in the react-native-svg
                    library. A constant Decoroate using the Circle component of svg library is used 
                    for the dots. and a third variable is multipled to the radius of the dots to show 
                    their relationship.
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

export default DecoratorExample

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