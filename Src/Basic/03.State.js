import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => { //每次调用setState时，BlinkApp 都会重新执行 render 方法重新渲染
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text style={{ fontSize:20 }}>{this.props.text}</Text>
        );
    }
}

export default class State extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle:`${navigation.state.params.title}`,
        headerTitleStyle:{
            color:'red'
        },
    });

    render() {
        return (
            <View style={{ alignSelf:'center' ,marginTop:100 }} >
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

