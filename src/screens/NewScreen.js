import React from "react";
import {View,Text,Pressable} from "react-native";
import{useNavigation,useRoute}from"@react-navigation/native";
export default HomeScreen=()=>{
    const navigation=useNavigation();
    const route=useRoute();
return(
 <View style={{flex:1,alignItems:"center"}}>
  <Text> NewScreen Screen</Text>
  <Text>id:{route.params.id}</Text>
  <Text>ad:{route.params.name}</Text>
   <Pressable style={{marginTop:20,backgroundColor:"grey",padding:10}} onPress={()=>
navigation.goBack()}>
   <Text style={{color:"white"}}>1. Ekrana git</Text>
   </Pressable>
   <Pressable style={{marginTop:20,backgroundColor:"grey",padding:10}} onPress={()=>
    navigation.navigate("ThirdScreen")
  
  } >
  <Text style={{color:"white"}}>3.ekrana git</Text>

  </Pressable>
 </View>




)



}