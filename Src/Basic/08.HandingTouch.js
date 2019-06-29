import  React,{ Component } from  'react'
import  {
    View,
    Alert,
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Platform,
}from 'react-native'

export  default  class HandingTouches extends Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`
    })


    //点击方法
     _onPressButton() {
        Alert.alert('You tapped the button!')
    }


    //长按方法
     _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }


    render() {
        return (
            <View>
                <Text style={{ marginLeft:20,marginTop:20 ,alignSelf:'center', fontSize:20 }}>处理触摸事件</Text>
                <Button
                        color = 'red'
                        onPress = { ()=>{
                        Alert.alert('点我啦');
                    }}
                    title="点我！"
                />


                <View style={{ marginTop:2, marginLeft:0, marginRight:0, backgroundColor:'red', height:1 }}></View>
                <Text style={{ marginLeft:20,marginTop:20 ,alignSelf:'center', fontSize:20 }}>按钮点击</Text>
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Press Me"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="Press Me"
                            color="#841584"
                        />
                    </View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                            onPress={this._onPressButton}
                            title="This looks great!"
                        />
                        <Button
                            onPress={this._onPressButton}
                            title="OK!"
                            color="#841584"
                        />
                    </View>
                </View>

                <View style={{ marginTop:2, marginLeft:0, marginRight:0, backgroundColor:'red', height:1 }}></View>
                <Text style={{ marginLeft:20,marginTop:20 ,alignSelf:'center', fontSize:20 }}>Touchable 系列组件</Text>

                <View style={styles.container}>

                    {/*制作按钮或者链接。此组件的背景会在用户手指按下时变暗*/}
                    <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>

                    {/*会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色*/}
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>


                    {/*Android 上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似墨水涟漪的视觉效果*/}
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>


                    {/*如果你想在处理点击事件的同时不显示任何视觉反馈，则需要使用TouchableWithoutFeedback*/}
                    <TouchableWithoutFeedback
                        onPress={this._onPressButton}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>


                    <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable with Long Press</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 10
    },
    alternativeLayoutButtonContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }
})
