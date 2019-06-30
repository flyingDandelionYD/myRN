import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class Timers extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        let text = '详见官方文档(重要)\nhttps://reactnative.cn/docs/timers/\n\n1.定时器\n2.InteractionManager\n3.在卸载组件前清除定时器'
        return(
            <Text style={{ alignSelf:'center',fontSize:20,color:'red',marginTop:100}}>
                { text }
            </Text>
        )
    }
}