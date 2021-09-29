import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const StartScreen = ({navigation}: {navigation: any}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.yellow}>
                Game Like
            </Text>                                  
            <Button title = 'TOUCH THE SCREEN' onPress = {() => navigation.navigate('LOGIN')}/>         
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#EDB0B0',
        
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



