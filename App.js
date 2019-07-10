import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Video from 'react-native-video';

export default function App() {

  let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Clouds_over_the_Atlantic_Ocean.jpg'
        };

  return (

    <ImageBackground source={pic}  style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      <Text>This is jimmy Hung!</Text>
      <Text>This is also Paper</Text>
      <Text>Que</Text>
     
    </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
