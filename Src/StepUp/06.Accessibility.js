import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class Accessibility extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        let text = '详见官方文档\n(https://reactnative.cn/docs/accessibility/)'
        return(
            <Text style={{ alignSelf:'center',fontSize:20,color:'red',marginTop:100}}>
                { text }
            </Text>
        )
    }
}