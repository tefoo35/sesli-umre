import React from 'react';
import {Text,View,ScrollView,StyleSheet,ImageBackground,AppState} from 'react-native';
import Header from '../ortak/Header';
import Button from '../ortak/button';
import Music_control from '../ortak/music_control';
var Sound =require('react-native-sound');
var music;

  export default class tabone extends React.Component{
  constructor(props){
    super(props);
  
   this.state={
    appState: AppState.currentState,
      play:false,
      speed:1,
      index:[{click:false,color:'black',url:'tabone_1.mp3'}
              ,{click:false,color:'black',url:'tabone_2.mp3'}
                ,{click:false,color:'black',url:'tabone_3.mp3'}
                  ,{click:false,color:'black',url:'tabone_4.mp3'}
                    ,{click:false,color:'black',url:'tabone_5.mp3'}
                      ,{click:false,color:'black',url:'tabone_6.mp3'}
                       ,{click:false,color:'black',url:'tabone_7.mp3'}
                         ,{click:false,color:'black',url:'tabone_8.mp3'}
                           ,{click:false,color:'black',url:'tabone_9.mp3'}
                           ,{click:false,color:'black',url:'tabone_9.mp3'}]
      
  
    };
  
  this.cal=this.cal.bind(this);
  this.playcontrol=this.playcontrol.bind(this);
  this.git=this.git.bind(this);
  this.arttir=this.arttir.bind(this);
  this.azalt=this.azalt.bind(this);
  }
  
  
  componentWillMount(){
    
    Sound.setCategory('Record');
    
  }
  
  
  arttir=()=>{ 
    if(music!=null){
  music.setSpeed(this.state.speed+0.5);
  this.setState({speed:this.state.speed+0.5})
  }
  }
  
  azalt=()=>{
  
    if(this.state.speed>0.5 && music!=null){
      
      music.setSpeed(this.state.speed-0.5); 
      this.setState({speed:this.state.speed-0.5});
  
    }
  }
    
  
  git=(napcaz)=>{
    
    if(music!=null){
    var hangiindex;
    for(var i=1;i<10;i++){
      if(this.state.index[i].click)
        {
          hangiindex=i;
          break;
        }
    }
    if(napcaz){
      
      music.reset();
      this.cal(hangiindex+1);
       }
       
    else{
      
      music.reset();
      this.cal(hangiindex-1);
    }
  }
  }
  
  playcontrol=()=>{
    if(music!=null){
    if(this.state.play){
      music.pause();
      this.setState({play:false});
      
    }
  else{
    if(music!=null){
    music.play();
    this.setState({play:true})
    }
  }
  }
  
  }
  
  
  
  
  
        cal = (gelen_index) => /*  */
        {
            if(music!=null){
              music.stop();
              music.reset();
            }
  
  
  for(var i=1 ; i<10   ; i++ ){
    
      if(gelen_index==i){
      
  this.setState({play:true});
        this.setState(this.state.index[i]={click:true ,color:'red',url:'tabone_'+i+'.mp3'})
        
  music = new Sound(this.state.index[i].url, Sound.MAIN_BUNDLE, (error) => {
    if (error) { 
      return;
    }
  else {
    
  music.setSpeed(this.state.speed);
  // Play the sound with an onEnd callback
  music.play((success) => {
    if (success) {
      this.cal(i+1);
      
    } else {
      console.warn('playback failed due to audio decoding errors'+success.error);
      // reset the player to its uninitialized state (android only)
      // this is the only option to recover after an error occured and use the player again
      music.reset();
      music.play();
    }
  });
  }
  
    });
         for(var a=1;a<10;a++){
          if(a!=i)
            this.setState(this.state.index[a]={click:false,color:'black'})
        }
        
  
        break;
      }
  } 
  
  
  
        }
  
  
    render(){
  
      return (
     
      
  <View  style={{flex:9 ,
       flexDirection:'column'}} onfocus >
        <View>
               <Header headerText="Tavaf Duaları"  />
  
          </View>
      <View style={{flex:8}} >
          <ScrollView>
   
      <View >
      
      <Button onPress={() =>this.cal(1)}   headertext="Tavaf'a Niyet" background={this.state.index[1].color}>  </Button>
    
      <Button onPress={() => this.cal(2)} headertext="Tavaf'ın 1.Şavtı " background={this.state.index[2].color}> </Button>
      <Button onPress={() =>this.cal(3)}headertext="Tavaf'ın 2.Şavtı "background={this.state.index[3].color}> </Button>
      <Button onPress={() =>this.cal(4) }headertext="Tavaf'ın 3.Şavtı "background={this.state.index[4].color}> </Button>
      <Button onPress={() =>this.cal(5)}headertext="Tavaf'ın 4.Şavtı "background={this.state.index[5].color}> </Button>
      <Button onPress={() =>this.cal(6)}headertext="Tavaf'ın 5.Şavtı "background={this.state.index[6].color}></Button>
      <Button onPress={() =>this.cal(7)}headertext="Tavaf'ın 6.Şavtı "background={this.state.index[7].color}>  </Button>
      <Button onPress={() =>this.cal(8) }headertext="Tavaf'ın 7.Şavtı "background={this.state.index[8].color}> </Button>
      <Button onPress={() =>this.cal(9)}headertext="Makamı  Ibrahimde Okunan Dua "background={this.state.index[9].color}>  </Button> 
          
      </View>
      </ScrollView></View>
      <View>
          
            <Music_control  style={{flex:1}}  dur={()=>this.playcontrol()} next={()=>this.git(true)}  ago={()=>this.git(false)} agospeed={()=>this.azalt()} nextspeed={()=>this.arttir()}/>
      </View>
      </View>
  
    );
    }}