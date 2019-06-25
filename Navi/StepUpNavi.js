import { createStackNavigator } from 'react-navigation';
import StepUp from '../Src/StepUp/StepUp'

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
});

export  default StepUpStackNavigator;
