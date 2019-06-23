import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MyApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      		<Text>这是一个Demo界面哟</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  }
});

// 整体js模块的名称
AppRegistry.registerComponent('MyApp', () => MyApp);