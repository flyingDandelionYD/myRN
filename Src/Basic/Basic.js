import React,{ Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Alert
} from 'react-native';


export default class Basic  extends Component{
  render(){
        return(
            <View style={styles.container}>
                <Button
                    title="点我"
                    onPress={()=>this.goToOtherPage()}
                >
                </Button>
            </View>
        );
    }

    goToOtherPage(){
        const {navigate} = this.props.navigation;
        navigate('OtherPage');
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
      },
});










