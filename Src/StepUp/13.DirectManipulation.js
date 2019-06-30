import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

class MyButton extends React.Component {
    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <View ref={component => this._root = component} {...this.props}>
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}

export  default  class DirectManipulation extends  Component{
       static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    })

    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return(
           <View>
               <TouchableOpacity>
                   <MyButton label="Press me!"  style={ styles.button }/>
               </TouchableOpacity>

               <TextInput
                   ref={ myInput => this._textInput = myInput}
                   //ref = { (myInput) => {this._textInput = myInput} } 此时myInput参数就是表示该DOM本身

                   style={{height: 50, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc',marginTop: 60}}
               />
               <TouchableOpacity onPress={this.clearText} style={ styles.button }>
                   <Text>Clear text</Text>
               </TouchableOpacity>
           </View>


        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:80,
        height:40,
        backgroundColor:'red',
        marginLeft:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    }

})