import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,//长列表 【这里暂时无需理会，会在下面的模块里面有具体的详解】
} from 'react-native';


export default  class Basic extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: '1.示例教程：Hello World', value:'HelloWorld'},
                        {key: '2.Props（属性）',value:'Props'},
                        {key: '3.State（状态）',value:'State'},
                        {key: '4.Style (样式)',value:'Style'},
                        {key: '5.Height and Width（高度与宽度）',value:'HW'},
                        {key: '6.Layout with Flexbox（使用Flexbox布局）',value:'FlexDirectionBasics'},
                        {key: '7.Handling Text Input（处理文本输入）',value:'TextInputs'},
                        {key: '8.Handling Touches（处理触摸事件）',value:'HandingTouch'},
                        {key: '9.Using a ScrollView（使用滚动视图）',value:'ScrollView'},
                        {key: '10.Using List Views（使用长列表）',value:'FlatList'},
                        {key: '11.Networking（网络）',value:'Network'},
                        {key: '12.（示例教程：电影列表）',value:'MovieDemo'},
                        {key: '13.More Resources（其他参考资源）',value:'OtherMore'},
                    ]}
                    renderItem={ ({item}) =>
                        <View>
                            <TouchableOpacity onPress={() => this.jumpToDetailView(item.value,item.key)}>
                                <Text style={styles.item}>{item.key}</Text>
                                <View style={styles.line}></View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }

    //跳转界面
    jumpToDetailView(detailurl,titleName){
        const {navigate} = this.props.navigation;
        navigate(detailurl,{title:titleName});
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 64,
        justifyContent:'center',
        lineHeight:44,
    },
    line:{
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0,
        height:0.5,
        backgroundColor:'lightgray',
    }
});











