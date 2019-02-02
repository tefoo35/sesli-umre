 import React from 'react';
 import  { Text, View } from 'react-native';

 const Header = (porps) => {
   const { textStyle, viewStyle } =  styles;  
   return (
     <View style={viewStyle}>
     <Text style={textStyle}> {porps.headerText} </Text>
    
</View>
   );

 };

 const styles = {
   textStyle: {
     backgroundColor:'transparent',
     color:'black',
    alignSelf: 'center',
     fontSize: 35
   },
   viewStyle: {
    
    borderWidth: 3,
    borderColor: 'black',//kenar cizgi rengi
     justifyContent: 'center',
     alignItems: 'center',
     
     shadowOffset:{widht: 100, height: 500 },
     shadowOpacity: 0.5,
     marginBottom:5,
     height:70
   }
 };
    export default Header;
