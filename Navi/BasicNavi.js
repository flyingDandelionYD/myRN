
import { createStackNavigator } from 'react-navigation';

import Basic from '../Src/Basic/Basic'
import HelloWorld  from '../Src/Basic/01.HelloWorld'
import Props from '../Src/Basic/02.Props'
import State from '../Src/Basic/03.State'
import Style  from '../Src/Basic/04.Style'
import HW from '../Src/Basic/05.HeigjtAndWidth'
import FlexDirectionBasics from  '../Src/Basic/06.Flexbox'
import TextInputs from '../Src/Basic/07.TextInput'
import HandingTouch from '../Src/Basic/08.HandingTouch'
import ScrollView from '../Src/Basic/09.ScrollView'
import FlatList from '../Src/Basic/10.FlatList'
import Network from '../Src/Basic/11.Network'
import MovieDemo from '../Src/Basic/12.Moviedemo'
import OtherMore from '../Src/Basic/13.OtherMore'


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
    HelloWorld:{
        screen:HelloWorld,
    },
    Props:{
        screen:Props
    },
    State:{
        screen:State,
    },
    Style: {
        screen: Style,
    },
    HW:{
        screen:HW,
    },
    FlexDirectionBasics:{
        screen:FlexDirectionBasics,
    },
    TextInputs:{
        screen:TextInputs,
    },
    HandingTouch:{
        screen:HandingTouch,
    },
    ScrollView:{
        screen:ScrollView,
    },
    FlatList:{
        screen:FlatList,
    },
    Network:{
        screen:Network,
    },
    MovieDemo:{
        screen:MovieDemo,
    },
    OtherMore:{
        screen:OtherMore,
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