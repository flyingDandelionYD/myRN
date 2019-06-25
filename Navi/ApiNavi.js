import { createStackNavigator } from 'react-navigation';
import API from '../Src/API/API';

const  APIStackNavigator = createStackNavigator({
    API:{
        screen:API,
        navigationOptions:{
            headerTitle:'API',
            headerStyle:{
            	backgroundColor:'lightblue'
            }
        }
    },
});

export  default APIStackNavigator;