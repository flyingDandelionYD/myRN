import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class OtherMore extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        return(
            <Text style={{ alignSelf:'center',fontSize:28,color:'red',marginTop:100}}>详见官网</Text>
        )
    }

}