import { createStackNavigator } from 'react-navigation';
import StepUp from '../Src/StepUp/StepUp'

import ComponentsAndApi from '../Src/StepUp/01.ComponentsAndApi'
import Platform from  '../Src/StepUp/02.Platform'
import Navigation from '../Src/StepUp/03.Navigation'
import Images from '../Src/StepUp/04.Images'
import Animation from '../Src/StepUp/05.Animation'
import Accessibility from '../Src/StepUp/06.Accessibility'
import ImprovingUserExperience from  '../Src/StepUp/07.ImprovingUserExperience'
import Timers from  '../Src/StepUp/08.Timers'
import Debug from '../Src/StepUp/09.Debug'
import Performance from  '../Src/StepUp/10.Performance'
import GestureRespondeSystem from '../Src/StepUp/11.GestureRespondeSystem'
import JavaScriptEnvironment from  '../Src/StepUp/12.JavaScriptEnvironment'
import DirectManipulation from '../Src/StepUp/13.DirectManipulation'
import ColorReference from '../Src/StepUp/14.ColorReference'
import IntegrationwithExistingApps from '../Src/StepUp/15.IntegrationwithExistingApps'
import BuildingForTVDevices from '../Src/StepUp/16.BuildingForTVDevices'
import RunningOnDevices from  '../Src/StepUp/17.RunningOnDevices'
import Upgrading from '../Src/StepUp/18.Upgrading'
import NativeModulesSetup from  '../Src/StepUp/19.NativeModulesSetup'


const  StepUpStackNavigator = createStackNavigator({
    StepUp:{
        screen:StepUp,
        navigationOptions:{
            headerTitle:'进阶',
            headerStyle:{
                backgroundColor:'red',
            },
            headerTitleStyle:{
                color:'white',
                fontSize:20,
            }
        }
    },
    ComponentsAndApi:{
        screen:ComponentsAndApi,
    },
    Platform:{
        screen:Platform,
    },
    Navigation:{
        screen:Navigation,
    },
    Images:{
        screen:Images,
    },
    Animation:{
        screen:Animation,
    },
    Accessibility:{
        screen:Accessibility,
    },
    ImprovingUserExperience:{
        screen:ImprovingUserExperience,
    },
    Timers:{
        screen:Timers,
    },
    Debug:{
        screen:Debug,
    },
    Performance:{
        screen:Performance,
    },
    GestureRespondeSystem:{
        screen:GestureRespondeSystem,
    },
    JavaScriptEnvironment:{
        screen:JavaScriptEnvironment,
    },
    DirectManipulation:{
        screen:DirectManipulation,
    },
    ColorReference:{
        screen:ColorReference,
    },
    IntegrationwithExistingApps:{
        screen:IntegrationwithExistingApps,
    },
    BuildingForTVDevices:{
        screen:BuildingForTVDevices,
    },
    RunningOnDevices:{
        screen:RunningOnDevices,
    },
    Upgrading:{
        screen:Upgrading,
    },
    NativeModulesSetup:{
        screen:NativeModulesSetup,
    }
});


//子界面的 tabarNavi都隐藏
StepUpStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

export  default StepUpStackNavigator;
