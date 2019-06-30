import React,{ Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';

export default class StepUp extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: '1.Components and APIs(组件和API)', value:'ComponentsAndApi'},
                        {key: '2.Platform Specific Code（特定平台代码）',value:'Platform'},
                        {key: '3.Navigating Between Screens使用导航器跳转页面）',value:'Navigation'},
                        {key: '4.Images(图片)',value:'Images'},
                        {key: '5.Animations（动画）',value:'Animation'},
                        {key: '6.Accessibility（无障碍功能）',value:'Accessibility'},
                        {key: '7.Improving User Experience（改进用户体验）',value:'ImprovingUserExperience'},
                        {key: '8.Timers（定时器）',value:'Timers'},
                        {key: '9.Debugging（调试）',value:'Debug'},
                        {key: '10.Performance（性能）',value:'Performance'},
                        {key: '11.Gesture Responder System（手势响应系统）',value:'GestureRespondeSystem'},
                        {key: '12.JavaScript Environment（JavaScript环境）',value:'JavaScriptEnvironment'},
                        {key: '13.Direct Manipulation（直接操作）',value:'DirectManipulation'},
                        {key: '14.Color Reference（颜色）',value:'ColorReference'},
                        {key: '15.Integration with Existing Apps（集成到现有原生应用）',value:'IntegrationwithExistingApps'},
                        {key: '16.Building For TV Devices（为电视和机顶盒制作应用）',value:'BuildingForTVDevices'},
                        {key: '17.Running On Device（在设备上运行）',value:'RunningOnDevices'},
                        {key: '18.Upgrading to new React Native versions（更新）',value:'Upgrading'},
                        {key: '19.Native Modules Setup（原生模块配置）',value:'NativeModulesSetup'},
                        {key: '20.（多平台支持）\nhttps://reactnative.cn/docs/out-of-tree-platforms/',value:''},
                        {key: '21.（从源代码编译React Native）\nhttps://reactnative.cn/docs/building-from-source/',value:''},
                        {key: '22.（发布自己定制的ReactNative包）\nhttps://reactnative.cn/docs/publishing-forks/',value:''},
                        {key: '23.（Testing your Changes）\nhttps://reactnative.cn/docs/testing/',value:''},
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


