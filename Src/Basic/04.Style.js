import React, { Component } from 'react';
import  {
    StyleSheet, //使用Style组件
    Text,
    View
} from  'react-native'


export  default class lostOfStyles extends  Component{
    static navigationOptions = ({ navigation})=>({
        headerTitle:`${navigation.state.params.title}`,
        headerStyle:{
            backgroundColor:'lightgreen',
        },
        headerTitleStyle:{
            color:'orange',
            fontSize: 28,
        }
    });

    render(){
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
            </View>
        );
    }
}


//创建style组件的样式
const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf:'center',
        marginTop:20,
    },
    red: {
        color: 'red',
        fontSize:25,
        alignSelf:'center',
        marginTop: 120,
    },
});