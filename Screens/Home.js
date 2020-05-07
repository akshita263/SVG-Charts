import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../Component/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
    render() {
        return (
            <View>
                <View>
                <Header title='HOME'/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>WELCOME!</Text>
                    <Text style={styles.subhead}>Learn about SVG CHARTS</Text>
                    <Text style={styles.text}>Swipe to explore  <Icon name="arrow-right" size={25}/></Text>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 300,
    },
    header:{
        fontSize: 50,
        fontWeight: 'bold',
    },
    subhead:{
        fontSize: 30,
    },
    text:{
        fontSize:20,
    }

})
