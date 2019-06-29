import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
}from 'react-native'

export  default  class FixedDimensionsBasics extends Component {
    static  navigationOptions = ({navigation}) =>({
        headerTitle:`${navigation.state.params.title}`,
        headerTitleStyle:{
            color:'white',
        },
        headerStyle:{
            backgroundColor:'orange',
        }
    });

    render() {
        return (
            <View>
                <Text style={{ marginTop:20, fontSize:20, marginLeft:50 }}>指定宽高</Text>
                <View style={ styles.view1 }/>
                <View style={ styles.view2 } />
                <View style={ styles.view3 } />
                <Text style={{ marginTop:50, fontSize:20, marginLeft:50 }}>弹性（Flex）宽高</Text>

                {/*使用flex:1来指定某个组件扩张以撑满所有剩余的空间*/}
                <View style={{width:200, height:200, marginLeft:50, marginTop:30,backgroundColor:'purple'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
        view1:{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
            marginLeft:50,
            marginTop:20,
        },
        view2:{
            width: 100,
            height: 100,
            backgroundColor: 'skyblue',
            marginLeft: 50
        },
        view3:{
            width: 150,
            height: 150,
            backgroundColor: 'steelblue',
            marginLeft: 50
        }
})

