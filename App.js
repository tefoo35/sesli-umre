import React from 'react';
import { ScrollView, View,AppState} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import tabtree from './tabs/temel_bilgiler';
import tabone from './tabs/tavaf';
import tabtwo from './tabs/say';
const TabNavigator = createBottomTabNavigator( {
  
 'Temel Bilgiler' :{ screen:tabtree},
  'Tavaf Duaları': { 
    screen: tabone ,
    tabBarLabel :'Tavaf Duaları',
   
    },
 'Say Duaları': { screen: tabtwo }
} 
,
{ 
  lazy: true,
  swipeEnabled: false,
  backBehavior: 'none',
  lazy: true,
  resetOnBlur:true,
  swipeEnabled: false,
tabBarOptions: {
activeTintColor: 'orange',
resetOnBlur:true,
labelStyle: {
  marginBottom:15,
  fontSize: 15,
},
style: {
   
   alignItems:'center',
    height:60
},
}

});

export default createAppContainer(TabNavigator);





