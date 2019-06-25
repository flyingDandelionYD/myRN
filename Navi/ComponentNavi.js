
import { createStackNavigator } from 'react-navigation';

import Components from '../Src/Component/Component'


const ComponentsStackNavigator = createStackNavigator({
    Components:{
        screen:Components,
        navigationOptions:{
            headerTitle:'组件',
            headerStyle:{
            	backgroundColor:'lightgray'
            }
        },
    },

});



export default ComponentsStackNavigator;