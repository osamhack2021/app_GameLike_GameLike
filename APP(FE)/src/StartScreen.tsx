import * as React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';

const StartScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.back}>
      <ImageBackground
        source={require('../assets/images/background/background.png')}
        style={styles.bg}>
        <View style={styles.container}>
          <Image source={require('../assets/images/ui/logo_pure.png')} />
          <Button
            title="TOUCH THE Button"
            onPress={() => navigation.navigate('LOGIN')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  bg: {},
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue: {
    color: '#5E8BE4',
    fontWeight: 'bold',
    fontSize: 30,
  },
  yellow: {
    color: '#FFD858',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default StartScreen;
