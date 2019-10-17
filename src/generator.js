import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,TouchableWithoutFeedback,TouchableOpacity
} from 'react-native';


// const generate =(props)=>{
//     return(
//      <Button 
//         title="Add Number"
//         onPress={()=>alert('trigger')}
//      />
    
//      );
//     }

const generate =(props)=>{
   
    console.log(props);
return(
    <TouchableOpacity
    style={styles.generate}
     onPress={()=>props.add()}
    // onLongPress={()=>props.add()}
    // onLongPress={()=>alert('triggers')}
    >
      
  
 
  <View style={styles.generate}>
  <Text>Add Number</Text>
</View>
</TouchableOpacity>
);}

const styles =StyleSheet.create({
generate:{
  backgroundColor:'blue',
  alignItems:'center',
  padding:10,
  width:'100%'
}
})


export default generate;



