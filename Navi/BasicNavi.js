
import { createStackNavigator } from 'react-navigation';

import Basic from '../Src/Basic/Basic'
import OtherPage from '../Src/Basic/0.OtherPage'

const BasicStackNavigator = createStackNavigator({
    Basic:{
        screen:Basic,
        navigationOptions:{
            headerTitle:'基础',
            headerStyle:{
            	backgroundColor:'lightgreen'
            }
        }
    },
    OtherPage:{
        screen:OtherPage,
    }
});

//子界面的 tabarNavi都隐藏
BasicStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};


export default  BasicStackNavigator;