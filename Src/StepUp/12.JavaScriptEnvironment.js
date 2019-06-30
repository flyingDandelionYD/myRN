import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class JavaScriptEnvironment extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        let text = '详见官方文档\nhttps://reactnative.cn/docs/javascript-environment/'
        return(
            <Text style={{ alignSelf:'center',fontSize:22,color:'red',marginTop:100,marginLeft:20}}>
                { text }
            </Text>
        )
    }
}