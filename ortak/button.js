import React from 'react';
  import { Text, TouchableOpacity } from 'react-native';
  
const button = (props ) => {
  
const { buttonstyle, textstyle} = styles;

  return (

    <TouchableOpacity onPress={props.onPress} style={[buttonstyle,{borderColor:props.background}]} >
    
    <Text style={[textstyle]} >{props.headertext}</Text>
    
</TouchableOpacity >
  );
};
const styles = {
   buttonstyle:
{
  alignSelf: 'stretch',
  borderRadius: 5,
  marginTop:5,
  backgroundColor:'transparent',
  borderWidth: 2,
  //borderColor: 'green',//kenar cizgi rengi
  marginLeft: 5,
  elevation:2,
  marginRight: 5
},
textstyle: {
  fontWeight:'bold',
  color: 'black',//yazi rengi
  fontSize: 15,
  paddingTop: 10,
  marginLeft:15,
  paddingBottom: 8
}
};

export default button;
