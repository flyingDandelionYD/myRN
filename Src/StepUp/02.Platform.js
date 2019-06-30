import React,{Component} from 'react'

import {
    Platform,
    StyleSheet,
    View,
    Alert,
} from "react-native";

import  MButton from './myButton'

const majorVersionIOS = parseInt(Platform.Version, 10);

export default  class  myPlatform extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle:`${navigation.state.params.title}`,
        headerTitleStyle:{
            color:'red'
        },
    });

    render() {
        if (majorVersionIOS >= 10) {
            Alert.alert('Platform.Version = ' + majorVersionIOS)
        }
        return (
            <View>
                <View style={styles.view}></View>
                <View style={styles.view2}></View>
                <MButton></MButton>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    view:{
        height: Platform.OS === "ios" ? 200 : 10,
        width:300,
        backgroundColor:'red'
    },
    view2:{
        marginTop:10,
        width:300,
        height:100,
        ...Platform.select({
            ios: {
                backgroundColor: "blue"
            },
            android: {
                backgroundColor: "green"
            }
        })
    }
})


/*
可以直接用它针对不同平台返回不同的组件
const Component = Platform.select({
    ios: () => require("ComponentIOS"),
    android: () => require("ComponentAndroid")
})();
<Component />;
*/



