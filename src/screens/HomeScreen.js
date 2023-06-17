import React from "react";
import {Pressable, Text, View} from "react-native";
import{useNavigation}from"@react-navigation/native";
export default HomeScreen=()=>{
const navigation=useNavigation();
return(
 <View style={{flex:1,alignItems:"center"}}>
  <Text>Home Screen</Text>
  <Pressable style={{marginTop:20,backgroundColor:"grey",padding:10}} onPress={()=>
   navigation.navigate("NewScreen",{id:"5",name:"ali"})
}>
    <Text style={{color:"white"}}>2.ekrana gir</Text>

  </Pressable >
 

 </View>




)



}