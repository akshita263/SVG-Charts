import React from 'react'
import { AreaChart, Grid, XAxis, YAxis, LineChart } from 'react-native-svg-charts'
import { Circle, Path } from 'react-native-svg'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


class DecoratorExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95,  85, 91, 35, 53, 24, 50, ]
        const axesSvg = { fontSize: 12, fill: 'black' };
        const verticalContentInset = { top: 0, bottom: 10 }
        const xAxisHeight = 10

        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 4 }
                    stroke={ 'black' }
                    fill={ 'red' }red/>
            ))
        }


        return (
            <ScrollView style={styles.main}>
            <View style={styles.textContainer}>
                <Text style={styles.head}>SCATTER PLOT</Text>
                <Text style={styles.intro}> 
                The standard way to show relationship between two continuous variables each
                    having its own axis.
                </Text>
            </View>

            <TouchableOpacity style={styles.chart}>
            <View style={{ flexDirection: 'row', height: 310, width: 300 }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight , marginLeft: 5}}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 20, marginBottom: 20 }}>
                <AreaChart
                        style={{ height: 300, width: 300 }}
                        data={ data }
                        svg={{ fill: 'rgba(134, 65, 244, 0)', }}
                        contentInset={{ top: 20, bottom: 20, left: 7, right:20 }}
                    >
                        <Grid/>
                        <Decorator/>
                    </AreaChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight, marginBottom: 20, }}
                        data={data}
                        formatLabel={(value, index) => index+1 }
                        contentInset={{ left: 20, right: 20 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
               
            </TouchableOpacity>
        
            <View style={styles.textContainer}>
                <Text style={styles.intro}> 
                    This chart is build using a basic Area Chart avaialable in the 
                    react-native-svg-charts, along with other components available in the react-native-svg
                    library. A constant Decoroate using the Circle component of svg library is used for the dots.
                    Since, it is an area chart
                    but we dont want it to be shaded, the fill is set to none.
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

export default DecoratorExample;

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