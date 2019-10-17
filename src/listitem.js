import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,TouchableWithoutFeedback,TouchableOpacity
} from 'react-native';

const listitem =(props)=>{

    return(
            props.items.map((item,id)=>(
                <TouchableOpacity
                key={id}
                style={styles.listitem}
                onPress={()=>props.delete(id)}
                >
                       <Text>{item}</Text>
                </TouchableOpacity>
            )
            )
    );
    
}

const styles =StyleSheet.create({
    listitem:{
      backgroundColor:'grey',
      alignItems:'center',
      padding:10,
      width:'100%',
      marginTop:5
    }
    })
    
    
    export default listitem;
    