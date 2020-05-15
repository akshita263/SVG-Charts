import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


class GroupedBarChartExample extends React.PureComponent {

    render() {

        const data1 = [ 14, 60, 75, 35, ]
            .map((value) => ({ value }))
        const data2 = [ 24, 98, 21, 53, ]
            .map((value) => ({ value }))

        const barData = [
            {
                data: data1,
                svg: {
                    fill: 'rgba(0, 0, 0)',
                },
            },
            {
                data: data2,
            },
        ]

        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>PAIRED BAR CHART</Text>
                    <Text style={styles.intro}> 
                        Similar to standard Bar Chart but allows multiple series. Can become tricky to read
                            with more than two series.                        
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} >
                    <BarChart
                        style={ { height: 350 } }
                        data={ barData }
                        yAccessor={({ item }) => item.value}
                        svg={{
                            fill: 'orange',
                        }}
                        spacing={0.2}
                        horizontal= {true}
                        gridMin={0}
                        contentInset={ { top: 10, bottom: 10 } }
                        { ...this.props }
                    >
                        <Grid direction={Grid.Direction.VERTICAL}/>
                    </BarChart>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Bar Chart avaialable in the 
                        react-native-svg-charts. Here two seperate array of data: data1 and data2 are made
                        and then combined in a single array: data where color for each is specified.
                    </Text>                        
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>Props Used</Text>
                    <Text style={styles.subHead}>data:</Text>
                    <Text style={styles.list}> 
                        An array of integers is passed as an object.
                    </Text>
                    <Text style={styles.subHead}>yAccessor:</Text>
                    <Text style={styles.list}> 
                        It takes each entry of data (named "item") as well as the index and 
                        returns the y-value of that entry.              
                     </Text>
                    <Text style={styles.subHead}>svg:</Text>
                    <Text style={styles.list}> 
                         It accepts various children props but here, 
                        an object fill that accepts the color of the bar is passed.
                    </Text>
                    <Text style={styles.subHead}horizontal >horizontal: </Text>
                    <Text style={styles.list}> 
                        Horizontal is set to true because
                        Bar charts are horizontal and column charts are vertical.
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

export default GroupedBarChartExample

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



