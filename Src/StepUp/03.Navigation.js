import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class Navigation extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        let text = ' React Navigation \n react-native-navigation'
        return(
            <Text style={{ alignSelf:'center',fontSize:28,color:'red',marginTop:100}}>
                { text }
            </Text>
        )
    }
}