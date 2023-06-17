import React from "react";
import {View,Text,Pressable} from "react-native";
import{useNavigation,useRoute}from"@react-navigation/native";
export default HomeScreen=()=>{
    const navigation=useNavigation();
  
return(
 <View style={{flex:1,alignItems:"center"}}>
  <Text> Third Screen Screen</Text>

   <Pressable style={{marginTop:20,backgroundColor:"grey",padding:10}} onPress={()=>
navigation.goBack()}>
   <Text style={{color:"white"}}>1. Ekrana git</Text>
   </Pressable>
   <Pressable style={{marginTop:20,backgroundColor:"grey",padding:10}} 
   onPress={()=>navigation.replace("HomeScreen")}>
   <Text style={{color:"white"}}>Home ekranına gir</Text>


   </Pressable>
 </View>




)
   }