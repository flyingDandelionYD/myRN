import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
} from 'react-native';


//定义一个组件
class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', marginTop: 50}}>
                <Text style={{ fontSize:28 }}> Hello {this.props.name}!</Text>
            </View>
        );
    }
}


export default class Props extends Component {
    //设置navigation的标题及样式
    static navigationOptions = ({ navigation }) => ({
        headerTitle:`${navigation.state.params.title}`,
        headerTitleStyle:{
            color:'red'
        },
    });
    render() {
        //定义个图片路径uri
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <View style={styles.pic}>
                    <Image style={{ flex:1 }} source={pic}/>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Greeting name='Rexxar' />
                    <Greeting name='Jaina' />
                    <Greeting name='Valeera' />
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    //图片的属性
    pic:{
        width: 200,
        height: 220,
        marginTop:60,
        backgroundColor:'red',
        alignSelf:'center' //水平居中
    },
});