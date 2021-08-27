import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { WebView } from 'react-native-webview'



function App(){
  return (
        <View style={styles.container}>
        <View style={{ width:'100%', height:'100%'}}>
          <WebView 
          source={{ uri:"https://marketplace.axieinfinity.click/" }}
          onLoad={console.log('Loaded!')}
          />
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:1,
    backgroundColor: '#222',
    alignItems:'center',
    justifyContent: 'center'
  }
})

export default App;
