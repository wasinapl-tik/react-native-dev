import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,TouchableWithoutFeedback,TouchableOpacity,TextInput,Scrollview
} from 'react-native';


class Input extends Component{

    state={
        myTextInput:'Fancis',
        users:['Jame','John','Tig','Tony','Bob','Lee','Awe','Tom','Boy']
    }

    onChangeInput=(event)=>{
     
    this.setState({
        myTextInput:event
    })
    }
    onAddUser=()=>{
        this.setState(prev=>{
             console.log(prev);
            return{
                myTextInput:'',
                users:[...prev.users,prev.myTextInput]
            
            }
            
        })
    }
    
    render(){
        return(

     <View    style={styles.wrapperinput}>
             <TextInput
           value={this.state.myTextInput}
           style={styles.input}
           onChangeText={this.onChangeInput}
        //    autoCapitalize={'words'}
           />
           <Button
           title="Add User Name"
           onPress={this.onAddUser}
           />
        
            {
         this.state.users.map(item=>
             <Text   style={styles.users} key={item}>{item}</Text>
         )
        }
    

    
     </View>
 
        );
    }

}

const styles =StyleSheet.create({
    input:{
      backgroundColor:'#f2f2f2',
      width:'100%',
      marginTop:10,
      fontSize:20,
      padding:10
    },
    wrapperinput:{
        width:'100%'
      },
      users:{
          fontSize:30,
          borderWidth:1,
          borderColor:'grey',
          padding:10,
          marginBottom:20
      }

    })

export default Input;