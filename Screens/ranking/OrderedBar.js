import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'


export default class OrderedBar extends React.PureComponent {
    render() {
        const fill = '#ffcc33ad'
        const data = [50, 60, 20, 140, 90, 10 ]
        data.sort(function(a, b){return b-a});

        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>ORDERED BAR</Text>
                    <Text style={styles.intro}> 
                        Standard Bar Charts display the ranks of value much mpre easily when sorted
                        into order.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart}>
                    <BarChart 
                        style={{ height: 300 ,}} 
                        data={data} 
                        svg={{ fill }} 
                        gridMin={0}
                        horizontal={true}
                        contentInset={{ top: 0, bottom: 0 }}>
                        <Grid direction={Grid.Direction.VERTICAL}/>
                    </BarChart>
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
                    <Text style={styles.subHead}>gridMin: </Text>
                    <Text style={styles.list}> 
                       It accepts a value in the form of object. In this case it is set 
                       to 0 to not miss any value.
                    </Text>
                    <Text style={styles.subHead}>horizontal: </Text>
                    <Text style={styles.list}> 
                        Horizontal is set to true.
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
