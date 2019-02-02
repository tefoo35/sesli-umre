import React  ,{ PropTypes } from 'react';
import {View,TouchableOpacity,Image ,Text,Picker} from 'react-native';

export default class music_control extends React.Component{
            constructor(props){
                super(props);
                this.state={
                    speed:1
                }
            }

        changespeed=(item)=>{
            this.setState({speed:item});
            console.warn(this.state.speed);
            
        }
        render(){
    return (
        <View style={{width:'100%',
        backgroundColor:'grey',flexDirection:'row'}}>
        <View style={{flexDirection: 'row',
        height:60,
        marginLeft:38,
        flex:8, 
        justifyContent: 'center',
        alignItems: 'center'}}>
        <TouchableOpacity onPress={this.props.ago} >
            <Image source={require('../assets/sol.png')} style={{width:40,height:40}} ></Image>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.props.dur}>
                <Image source={require('../assets/play.png')} style={{width:50,height:50,marginLeft:20,marginRight:20}} ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.next}>
                <Image  source={require('../assets/sag.png')} style={{width:40,height:40}} ></Image>
            </TouchableOpacity>
            </View>
            
           <View style={{flex:1.5}}>
         
           <TouchableOpacity onPress={this.props.nextspeed}>
                <Image source={require('../assets/ust.png')} style={{width:15,height:20,marginLeft:13}} ></Image>
            </TouchableOpacity>
            <Text style={{paddingRight:5}}>speed</Text>
            <TouchableOpacity onPress={this.props.agospeed}>
                <Image  source={require('../assets/assa.png')} style={{width:15,height:20,marginLeft:13}} ></Image>
            </TouchableOpacity>
          


           </View>

        </View>
    );
}
}
