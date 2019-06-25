
import { createStackNavigator } from 'react-navigation';

import Guide from '../Src/Guide/guide-ios';


const  GuideStackNavigator = createStackNavigator({
    Guide:{
        screen:Guide,
        navigationOptions:{
            headerTitle:'使用指南',
            headerStyle:{
            	backgroundColor:'orange'
            }
        }
    },
});


export default GuideStackNavigator;