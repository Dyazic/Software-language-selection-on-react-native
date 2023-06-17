import React, { useState } from 'react';

import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element { //fonksiyonun temel alanı
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("React Native");
  const [indexJava, setInJava] = useState(1);
  const [indexCsha, setInCsha] = useState(2);
  const [indexPyth, setInPyth] = useState(3);
  const [indexReact, setInReac] = useState(4);
  const next = () => {
    if (page == 4) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
    if (page == 1) {
      setInJava(1);
      setInCsha(2);
      setInPyth(3);
      setInReac(4);
      setLanguage("React Native");
    } else if (page == 2) {
      setInJava(2);
      setInCsha(3);
      setInPyth(4);
      setInReac(1);
      setLanguage("Python");
    } else if (page == 3) {
      setInJava(1);
      setInCsha(4);
      setInPyth(3);
      setInReac(2);
      setLanguage("C#")
    } else if (page == 4) {
      setInJava(4);
      setInCsha(3);
      setInPyth(2);
      setInReac(1);
      setLanguage("Java")
    }
  }
  const back = () => {
    if (page == 1) {
      setPage(4);
    } else {
      setPage(page - 1);
    }
    if (page == 1) {
       console.log(page);
      setInJava(4);
      setInCsha(3);
      setInPyth(2);
      setInReac(1);
      setLanguage("Java");
    } else if (page == 2) {
      console.log(page);
      setInJava(3);
      setInCsha(2);
      setInPyth(1);
      setInReac(4);
      setLanguage("React Native");
    } else if (page == 3) {
      console.log(page);
      setInJava(2);
      setInCsha(1);
      setInPyth(4);
      setInReac(3);
      setLanguage("Python");
    } else if (page == 4) {
      console.log(page);
      setInJava(1);
      setInCsha(4);
      setInPyth(3);
      setInReac(2);
      setLanguage("C#");
    }
  }
  return (

    <SafeAreaView style={{ flex:1 }}>
      <View style={{ flex: 1}}>
        <View style={{
          backgroundColor: "#fcdea2",
          borderBottomEndRadius: 20,
          width: 150, height: 150,
          position: 'absolute', top: 25, left: 25,
          zIndex: indexJava
        }}>
          <Image style={styles.stretch} source={require("./assets/images/java-logo-1.png")} /></View>

        <View style={{
          backgroundColor: "#fcdea2",
          borderBottomEndRadius: 20,
          width: 150, height: 150,
          position: 'absolute', top: 75, left: 75,
          zIndex: indexCsha
        }}>
          <Image style={styles.stretch} source={require("./assets/images/C-Sharp-logo.png")} /></View>

        <View style={{
          backgroundColor: "#fcdea2",
          borderBottomEndRadius: 20,
          width: 150, height: 150,
          position: 'absolute', top: 125, left: 125,
          zIndex: indexPyth
        }}>
          <Image style={styles.stretch} source={require("./assets/images/python_logo.png")} /></View>

        <View style={{
          backgroundColor: "#fcdea2",
          borderBottomEndRadius: 20
          , width: 150, height: 150,
          position: 'absolute', top: 175, left: 175,
          zIndex: indexReact
        }}>
          <Image style={styles.stretch} source={require("./assets/images/react_native_logo.png")} /></View>
      </View>

      <View style={{ flex: 0.75, alignItems: 'baseline', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Pressable style={{
          backgroundColor: "grey",
          width: 100, height: 50, justifyContent: 'center',
          alignItems: 'center', borderRadius: 20
        }} onPress={back}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>Geri</Text>
        </Pressable>
        <Pressable style={{
          backgroundColor: "grey",
          width: 100, height: 50, justifyContent: 'center',
          alignItems: 'center', borderRadius: 20
        }} onPress={next}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>İleri</Text>
        </Pressable>
        <Text style={styles.pageText}>{language}</Text>
      </View>
      
      
    </SafeAreaView>



  );
}
const styles = StyleSheet.create({

  bg: {
    flex: 1,
    backgroundColor: "#d4d4d4",
    justifyContent: "space-around",
  },


  stretch: {
    width: 150,
    height: 150,
    // resizeMode: 'stretch',
  },
  pageText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },


});
export default App;