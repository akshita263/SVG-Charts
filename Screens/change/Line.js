import React from 'react'
import { Grid, LineChart, XAxis, YAxis, Path } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'

class AxesExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30

        const Shadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={5}
                stroke={'rgba(134, 65, 244, 0.2)'}
            />
        )

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>LINE CHART</Text>
                    <Text style={styles.intro}> 
                        The standard way to show a changing time series. If data are irregular consider,
                         markers to represent data points.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} >
                    <View style={{ height: 300, flexDirection: 'row' }}>
                    <YAxis
                        data={data}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data}
                            contentInset={verticalContentInset}
                            svg={{  stroke: '#035b96', strokeWidth: 3}}
                        >
                            <Grid/>
                            <Shadow />
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={axesSvg}
                        />
                    </View>
                    </View>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Lind Chart avaialable in the 
                        react-native-svg-charts, additional XAxis and YAxis comopnents are added to 
                        make the chats more descriptive and a shadow element is added to enhance
                        the visuals of the chart.
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

export default AxesExample


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

