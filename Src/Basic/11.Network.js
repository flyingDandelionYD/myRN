import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View,
    Button,
    Alert
} from 'react-native';

import axios from 'axios';
import Frisbee from'frisbee';

export  default  class Network extends  Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    render() {
        return( <ScrollView>
                <Text style={{ alignSelf:'center',fontSize:20,color:'red',marginTop:10}} >详见官网</Text>
                <Text style={{ alignSelf:'center',fontSize:20,color:'red',marginTop:10}} >https://reactnative.cn/docs/network/</Text>
                {examples.map(function (item,index) {
                    return <View key={index} style={{backgroundColor:'lightgreen',padding:10,marginTop:10}}>
                        <Text style={{fontSize:20,color:'green',marginTop:10,marginLeft:12}}>{item.description}</Text>
                        {item.render()}
                    </View>
                })}

            </ScrollView>
        )
    }
}

let url = "http://service.inke.com/api/live/simpleall?&gender=1&gps_info=116.346844%2C40.090467&loc_info=CN%2C%E5%8C%97%E4%BA%AC%E5%B8%82%2C%E5%8C%97%E4%BA%AC%E5%B8%82&is_new_user=1&lc=0000000000000053&cc=TG0001&cv=IK4.0.30_Iphone&proto=7&idfa=D7D0D5A2-3073-4A74-A726-98BE8B4E8F38&idfv=58A18E13-A21D-456D-B6D8-7499948B379D&devi=54b68af1895085419f7f8978d95d95257dd44f93&osversion=ios_10.300000&ua=iPhone6_2&imei=&imsi=&uid=450515766&sid=20XNNoa5VwMozGALfmi2xN1YCfLWvEq7aJuTHTQLu8bT88i1aNbi0&conn=wifi&mtid=391bb3520c38e0444ba0b3975f4bb1aa&mtxid=f0b42913a33c&logid=162,210&s_sg=3111b3a0092d652ab3bcb218099968de&s_sc=100&s_st=1492954889";

function buttonClick() {
    axios.get(url)
        .then(function (response) {
            Alert.alert(JSON.stringify(response));
        })
        .catch(function (error) {
            Alert.alert(error.toString())
        })
        .then(function () {
            // always executed
        });
}

async function  buttonClickAsync(){
    axios.get(url)
        .then(function (response) {
            Alert.alert(JSON.stringify(response));
        })
        .catch(function (error) {
            Alert.alert(error.toString())
        })
        .then(function () {
            // always executed
        });
}


function  frisbeeClick() {
    const api = new Frisbee({
        baseURI: 'https://raw.githubusercontent.com', // optional
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    api.get('/facebook/react-native/0.51-stable/docs/MoviesExample.json')
        .then(function (response){
            Alert.alert(JSON.stringify(response))
        })
        .catch(console.error);
}


function  WebSocketClick() {
    var ws = new WebSocket('ws://host.com/path');

    ws.onopen = () => {
        // connection opened
        ws.send('something'); // send a message
    };

    ws.onmessage = (e) => {
        // a message was received
        // console.log(e.data);
        Alert.alert(JSON.stringify(e.data));
    };

    ws.onerror = (e) => {
        // an error occurred
        // console.log(e.message);
        Alert.alert(e.message);
    };

    ws.onclose = (e) => {
        // connection closed
        // console.log(e.code, e.reason);
        Alert.alert(e.code+e.reason);
    };
}

function FetchClick(){
    var REQUEST_URL =
        "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

    fetch(REQUEST_URL).then(response => response.json())
        .then(responseData => {
        Alert.alert(responseData.movies);
    }).catch(function(e) {
        console.log("Oops, error");
    });
}

let examples;
examples = [
    {
        description: '三方(npm install axios)\n\n(https://github.com/axios/axios) \n\n 1.简单使用axios',
        render() {
            return <Button title='axios' onPress={() => buttonClick()}></Button>
        }
    },
    {
        description: '2.简单使用axios,异步',
        render() {
            return <Button title='axios' onPress={() => buttonClickAsync()}></Button>
        }
    },
    {
        description: '三方(npm install --save frisbee) \n\n3.frisbee简单使用\n\n https://github.com/niftylettuce/frisbee',
        render() {
            return <Button title='frisbee' onPress={() => frisbeeClick()}></Button>
        }
    },
    {
        description: 'WebSocket 支持',
        render() {
            return <Button title='webSocket' onPress={() => WebSocketClick()}></Button>
        }
    },
    {
        description: 'Fetch',
        render() {
            return <Button title='Fetch' onPress={() => FetchClick()}></Button>
        }
    }

];