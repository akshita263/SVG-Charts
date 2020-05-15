import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import {Text as TextSvg} from 'react-native-svg'

class BarChartHorizontalWithLabels extends React.PureComponent {

    render() {

        const data = [ 10, 5, 25, 15, 20 ]

        const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <TextSvg
                    key={ index }
                    x={ x(index) + (bandwidth / 2) }
                    y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                    fontSize={ 14 }
                    fill={ value >= CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}
                </TextSvg>
            ))
        )


        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>COLUMN CHART</Text>
                    <Text style={styles.intro}> 
                        The standard way to compare the size of things. Must always start at 0 on the axis.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} >
                    <BarChart
                        style={{ flex: 1,  height: 300 }}
                        data={data}
                        svg={{ fill: 'rgba(0, 100, 50, 0.6)' }}
                        contentInset={{ top: 10, bottom: 10, left:10, right:10 }}
                        spacing={0.2}
                        gridMin={0}
                    >
                        <Grid/>
                        <Labels/>
                    </BarChart>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Bar Chart avaialable in the 
                        react-native-svg-charts. A Text component inherited from recat-native-svg is 
                        used to get label sthat display the value of each bar.
                        The color of label is determined by a seperate variable: CUT_OFF.
                        Values less than that are displayed by black color an dmore than that by white color
                        to create distinction.
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
                        an object fill that accepts the color of the bar is passed.
                    </Text>
                    <Text style={styles.subHead}>horizontal: </Text>
                    <Text style={styles.list}> 
                        Horizontal is set to false, because
                        bar charts are horizontal and column charts are vertical.
                        It is false by default as well.
                    </Text>
                    <Text style={styles.subHead}>spacing: </Text>
                    <Text style={styles.list}> 
                        This variable determines the spacing between each bar. Here it is set to 0.2
                    </Text>
                    <Text style={styles.subHead}>gridMin: </Text>
                    <Text style={styles.list}> 
                        It is here set to 0 to make sure that the charts starts at 0.
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

export default BarChartHorizontalWithLabels

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



