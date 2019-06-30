import React, { Component } from 'react';
import {
    Text,
} from 'react-native';

export  default  class GestureRespondeSystem extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        let text = '手势响应系统(https://reactnative.cn/docs/gesture-responder-system/)\n1.TouchableHighlight 与 Touchable 系列组件\n\n' +
            '响应者的生命周期\n1.捕获 ShouldSet 事件处理\n2.PanResponder'
        return(
            <Text style={{fontSize:20,color:'red',marginTop:100,marginLeft:20}}>
                { text }
            </Text>
        )
    }
}