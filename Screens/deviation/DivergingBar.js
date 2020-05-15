import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'

export default class DivergingBar extends React.PureComponent {
    render() {
        const fill = '#6497b1'
        
        const data = [50, -60, 70, -30, 40, -70]
        
        return (
            <ScrollView style={styles.main}>
                <View style={styles.textContainer}>
                    <Text style={styles.head}>DIVERGING BAR</Text>
                    <Text style={styles.intro}> 
                        It is a simple standard Bar Chart that can handle both positive nad negative magnitude
                         values.
                    </Text>
                </View>

                <TouchableOpacity style={styles.chart} 
                    onPress={()=> Alert.alert('The data used for this Chart:', '50, -60, 70, -30, 40, -70' )}>
                    <BarChart 
                        style={{ height: 400 }} 
                        data={data} 
                        svg={{ fill }} 
                        horizontal={true}
                        contentInset={{ top: 20, bottom: 20 , right: 20, left: 20}}>
                        <Grid direction={Grid.Direction.VERTICAL}/>
                    </BarChart>
                </TouchableOpacity>
            
                <View style={styles.textContainer}>
                    <Text style={styles.intro}> 
                        This chart is build using a basic Bar Chart avaialable in the 
                        react-native-svg-charts, as they accept both positive and negative values.
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
                    <Text style={styles.subHead}>horizontal: </Text>
                    <Text style={styles.list}> 
                        Horizontal is set to true ,since the deviation seems more clear in vertical bars.
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

