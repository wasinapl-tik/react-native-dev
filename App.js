import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Nav from './src/nav';
import Generator from './src/generator';
import Listitem from './src/listitem';

import Input from './src/input';
class App extends Component {

  state = {
    nameOfApp:'My Awesome App',
    random:[20,837]
  }

  onAddRandom=()=>{
    // const random =Math.floor(Math.random()*100)+1;
    // this.setState(prevState=>{
    //   return {
    //     random:[...prevState.random,random]
    //   }
    // })

    // trial set state
    // this.setState(prevst=>{
    //   const a='new name';
    //   return{
    //     nameOfApp:[...prevst.nameOfApp,a]
    //   }
    // })
   
 
  }

  onItemDelete=(position)=>{
    const newArray=this.state.random.filter((item,index)=>{
      return position !=index
    })
    this.setState({
      random:newArray
    })
    // alert(position)
  }
  render(){
  return (
   <View style={styles.mainView}>
        <Nav name={this.state.nameOfApp} />
        <ScrollView style={{width:'100%'}}>
     <Input/>
     </ScrollView>
     
{/* 
     <Nav name={this.state.nameOfApp} />


     <View style={styles.basicView}> 
       <Text style={styles.basicText}>test</Text>
       </View>
       <View style={styles.basicView}> 
       <Text style={styles.basicText}>test</Text>
       </View>

       <Generator add={this.onAddRandom}/>

       <Listitem 
       items={this.state.random}
       delete={this.onItemDelete}
       /> */}

   </View>
    );
  }
}


const styles=StyleSheet.create({
mainView:{
  backgroundColor:'white',
  paddingTop:50,
  width:'100%',
  alignItems:'flex-start',
  justifyContent:'flex-start'

},
basicView:{
  backgroundColor:'green',
  width:'100%',
  marginBottom:5,

},
basicText:{
  fontSize:20,
  color:'white',
 textAlign:'center',
 padding:20
}
});

export default App;
