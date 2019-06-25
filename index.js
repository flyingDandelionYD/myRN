import React from 'react';
import {
    AppRegistry,
} from 'react-native';
import TabNavigator from './Navi/TabNavigator'
export default class MyApp extends React.Component {
  render() {
    return (
        <TabNavigator/>
    );
  }
}
// 整体js模块的名称
AppRegistry.registerComponent('MyApp', () => MyApp);