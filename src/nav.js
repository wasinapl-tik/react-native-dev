import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Nav =(props)=>{
return(
  <View style={styles.nav}>
  <Text>{props.name}</Text>
</View>
);
}
const styles =StyleSheet.create({
nav:{
  backgroundColor:'red',
  alignItems:'center',
  padding:10,
  width:'100%'
}
})


export default Nav;



