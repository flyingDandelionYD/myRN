import React,{ Component } from 'react';
import {
    SectionList,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default  class ComponentsAndApi extends  Component{
    static navigationOptions = ({ navigation }) => ({
        headerTitle:`${navigation.state.params.title}`,
        headerTitleStyle:{
            color:'red'
        },
    });

    render() {
        return(
            <View style={styles.container}>
                {/*分组*/}
                <SectionList
                    sections={
                        [{
                            title: '基础组件',
                            data: [
                                'View:\n搭建用户界面的最基础组件',
                                'Text:\n显示文本内容的组件',
                                'Image:\n显示图片内容的组件',
                                'TextInput:\n文本输入框',
                                'ScrollView:\n可滚动的容器视图',
                                'StyleSheet:\n提供类似CSS样式表的样式抽象层'
                            ]},
                            {
                                title: '交互控件',
                                data: [
                                    'Button：\n一个简单的跨平台的按钮控件',
                                    'Picker：\n在iOS和Android上调用各自原生的选择器控件',
                                    'Slider：\n滑动数值选择器',
                                    'Switch：\n开关控件',
                                   ]
                            },
                            {
                                title:'列表视图',
                                data:[
                                    'FlatList:\n高性能的滚动列表组件',
                                    'SectionList:\n类似FlatList，但是多了分组显示',
                                ]
                            },
                            {
                                title:'iOS 独有的组件和 API',
                                data:[
                                    'ActionSheetIOS:\n从设备底部弹出一个显示一个ActionSheet弹出框选项菜单或分享菜单',
                                    'AlertIOS:\n弹出一个提示对话框，还可以带有输入框',
                                    'DatePickerIOS:\n显示一个日期/时间选择器',
                                    'ImagePickerIOS:\n插入图片',
                                    'NavigatorIOS:\nUINavigationController的封装，用于实现页面的导航跳转',
                                    'ProgressViewIOS:\n渲染一个UIProgressView进度条',
                                    'PushNotificationIOS:\n管理推送通知，包括权限处理和应用角标数字',
                                    'SegmentedControlIOS:\n渲染一个UISegmentedControl顶部选项卡布局',
                                    'TabBarIOS:\n渲染一个UITabViewController底部选项卡布局。需要和TabBarIOS.Item搭配使用',
                                ]
                            },
                            {
                                title:'Android 独有的组件和 API',
                                data:[
                                    'BackHandler:\n监听并处理设备上的返回按钮',
                                    'DatePickerAndroid:\n打开日期选择器',
                                    'DrawerLayoutAndroid:\n渲染一个DrawerLayout抽屉布局',
                                    'PermissionsAndroid:\n对Android 6.0引入的权限模型的封装',
                                    'ProgressBarAndroid:\n渲染一个ProgressBar进度条',
                                    'TimePickerAndroid:\n打开时间选择器',
                                    'ToastAndroid:\n弹出一个Toast提示框',
                                    'ToolbarAndroid:\n在顶部渲染一个Toolbar工具栏',
                                    'ViewPagerAndroid:\n可左右翻页滑动的视图容器',
                                ]
                            },
                            {
                                title:'其他',
                                data:[
                                    'ActivityIndicator:\n显示一个圆形的正在加载的符号',
                                    'Alert:\n弹出一个提示框，显示指定的标题和信息',
                                    'Animated:\n易于使用和维护的动画库，可生成流畅而强大的动画',
                                    'CameraRoll:\n访问本地相册',
                                    'Clipboard:\n读写剪贴板内容',
                                    'Dimensions:\n获取设备尺寸',
                                    'KeyboardAvoidingView:\n一种视图容器，可以随键盘升起而自动移动',
                                    'Linking:\n提供了一个通用的接口来调起其他应用或被其他应用调起',
                                    'Modal:\n一种简单的覆盖全屏的模态视图',
                                    'PixelRatio:\n可以获取设备的像素密度',
                                    'RefreshControl:\n此组件用在ScrollView及其衍生组件的内部，用于添加下拉刷新的功能',
                                    'StatusBar:\n用于控制应用顶部状态栏样式的组件',
                                    'WebView:\n在原生视图中显示Web内容的组件',
                                ]
                            }
                        ]}

                    renderItem={({item}) =>
                        <View>
                            <Text style={styles.item}>{item}</Text>
                            <View style={styles.line}></View>
                        </View>
                    }
                    renderSectionHeader={({section}) =>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    }
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        justifyContent:'center',
        lineHeight:28,
    },
    line:{
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0,
        height:0.5,
        backgroundColor:'lightgray',
    },
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color:'red',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
})

