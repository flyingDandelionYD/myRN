import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
}from 'react-native';

export  default class FlexDirectionBasics extends Component{
    static  navigationOptions = ({ navigation}) =>({
        headerTitle:`${navigation.state.params.title}`,
        headerStyle:{
            backgroundColor:'lightgreen',
        },
        headerTitleStyle:{
            color:'black',
            fontSize: 14,
        }
    });
    render(){
        return(
            <ScrollView>
                <View style={{ padding:10 }}>
                    <Text>Flex Direction:决定布局的主轴(竖直轴(column)/水平轴(row))</Text>
                    <View style={{flexDirection: 'row',width:250,height:50,backgroundColor:'red'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
                    </View>

                    <Text style={ { marginTop:30 }}>Justify Content:决定其子元素沿着主轴的排列方式,flex-start、center、flex-end、space-around、space-between以及space-evenly</Text>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width:100,
                        height:200,
                        backgroundColor:'orange',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>

                    <Text style={{ marginTop:20 }}>Align Items:决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式,可选项有：flex-start、center、flex-end以及stretch</Text>
                    <View style={{
                        height:300,
                        flexDirection: 'column',
                        justifyContent: 'center', //内容居中
                        alignItems: 'stretch',
                        backgroundColor:'orange',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{height: 100, backgroundColor: 'steelblue'}} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}