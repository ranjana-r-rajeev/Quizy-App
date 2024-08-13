import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Home({navigation}) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('./img/3.png')}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'yellow',
    borderColor: 'orange',
    padding: 18,
    borderRadius: 20,
    width: 140,
    height: 70,
    marginTop: 130,
    borderWidth: 2,
  },
  buttonText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
