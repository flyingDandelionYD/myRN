import React, { Component } from 'react';
import {
    View
} from 'react-native';

export  default  class ColorReference extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        return (
            <View style={{backgroundColor:'gray' ,flex:1 }}>

                {/*rgb() 和 rgba() 两种十六进制*/}
                <View style={ {marginTop:10, width:100,height:80 ,backgroundColor:'#ff00ff' }}></View>

                {/*色调-饱和度-亮度:hsl() 和 hsla() 函数*/}
                <View style={ {marginTop:10,  width:100,height:80 ,backgroundColor:'hsla(360, 18%, 100%, 1.0)' }}></View>
                <View style={ {marginTop:10, width:100,height:80 ,backgroundColor:'rgba(25, 325, 245, 1.0)' }}></View>


                {/*rgba(0,0,0,0) 的快捷方式是:'transparent'*/}
                <View style={ {marginTop:10, width:100,height:80 ,backgroundColor:'transparent' }}></View>


            </View>
        );
    }
}