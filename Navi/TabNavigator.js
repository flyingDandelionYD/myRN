import React from 'react';
import {
	Image,
	StyleSheet,
} from 'react-native';

import { createBottomTabNavigator,createAppContainer } from 'react-navigation';

import BasicStackNavigator  from './BasicNavi';
import StepUpStackNavigator from './StepUpNavi';
import GuideStackNavigator from './GuideNavi';
import ComponentsStackNavigator from './ComponentNavi';
import APIStackNavigator from './ApiNavi'


//https://reactnavigation.org/docs/zh-Hans/bottom-tab-navigator.html(设置参考)
const TabNavigator =  createBottomTabNavigator(
{
    Basic:{
        screen:BasicStackNavigator,
        navigationOptions:{
            tabBarLabel: '基础',
            //显示的图片
            tabBarIcon: ({tintColor,focused}) => (
                <Image
                    source={focused? require('../Assets/MineTabIcon_selected.png'):require('../Assets/MineTabIcon.png')}
                    style={styles.barIconStyle}
                />
            )}
    },
    StepUp:{
        screen:StepUpStackNavigator,
        navigationOptions: {
            tabBarLabel: '进阶',
            //显示的图片
            tabBarIcon: ({tintColor,focused}) => (
                <Image
                    source={focused? require('../Assets/MineTabIcon_selected.png'):require('../Assets/MineTabIcon.png')}
                    style={styles.barIconStyle}
                />
            ),
        }
    },
    Guide:{
        screen:GuideStackNavigator,
        navigationOptions: {
            tabBarLabel: '使用指南',
            //显示的图片
            tabBarIcon: ({tintColor,focused}) => (
                <Image
                    source={focused? require('../Assets/MineTabIcon_selected.png'):require('../Assets/MineTabIcon.png')}
                    style={styles.barIconStyle}
                />
            ),
        }
    },
    Components:{
        screen:ComponentsStackNavigator,
        navigationOptions: {
            tabBarLabel: '组件',
            //显示的图片
            tabBarIcon: ({tintColor,focused}) => (
                <Image
                    source={focused? require('../Assets/MineTabIcon_selected.png'):require('../Assets/MineTabIcon.png')}
                    style={styles.barIconStyle}
                />
            ),
        }
    },
    API:{
        screen:APIStackNavigator,
        navigationOptions: {
            tabBarLabel: 'API',
            //显示的图片
            tabBarIcon: ({tintColor,focused}) => (
                <Image
                    source={focused? require('../Assets/MineTabIcon_selected.png'):require('../Assets/MineTabIcon.png')}
                    style={styles.barIconStyle}
                />
            ),
        }
    },
},
{
	tabBarOptions:{
  		activeTintColor: '#DF8929',//活动选项卡的标签和图标颜色
  			labelStyle: { //选项卡标签的样式对象
    		fontSize: 12,
  			},
  		style:{ //选项卡栏的样式对象
  			backgroundColor: 'white',
   		  },
	}
}
);

const styles = StyleSheet.create({
    barIconStyle:{
      height:23,
      width:23,
    },
   
});

export default createAppContainer(TabNavigator);

