import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class BuildingForTVDevices extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        let text = '详见官方文档\nhttps://reactnative.cn/docs/building-for-apple-tv/'
        return(
            <Text style={{ alignSelf:'center',fontSize:28,color:'red',marginTop:100}}>
                { text }
            </Text>
        )
    }
}