import  React,{ Component } from 'react'
import  {
    View,
    TextInput,
    StyleSheet,
    Text,
} from "react-native";

export  default  class TextInputs extends Component{
    static  navigationOptions = ({ navigation }) =>({
        headerTitle:`${navigation.state.params.title}`,
        headerStyle: {
            backgroundColor: 'orange',
        },
        headerTitleStyle:{
            fontSize:14,
        }
    })

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{ padding:20 }}>
                <TextInput
                    style={ styles.myTextInput }
                    placeholder= '占位文字哟'
                    onChangeText={ (text)=> this.setState({text})} >
                </TextInput>
                <Text style={styles.myText }>{ this.state.text }</Text>
                <Text style={{padding: 10, fontSize: 42}}>
                    {/*{ this.state.text.split(' ').map(function (word) {*/}
                    {/*    return  word && '🍕'*/}
                    {/*}).join(' ')}*/}

                    {/*只要“&&”前面是true,无论“&&”后面是true还是false,结果都将返“&&”后面的值*/}
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    myTextInput:{
        height:40,
        backgroundColor: 'lightgray',
        padding: 10,
    },
    myText:{
        marginTop:10,

    }

})