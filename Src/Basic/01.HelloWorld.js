import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

export default class HelloWorld extends Component{
    //设置navigation的标题及样式
    static navigationOptions = ({ navigation }) => ({
        headerTitle:`${navigation.state.params.title}`,
        //设置title的样式
        headerTitleStyle:{
            color:'red'
        },
    });

    render(){
        //拿到导航对象（里面有标题等属性）
        const {params} = this.props.navigation.state;
        Alert.alert(params.title);
        return (
            <View style={styles.container}>
                <Text style={styles.text} >Hello, world!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },

    text:{
        fontSize:48,
        color:'green'
    }
});