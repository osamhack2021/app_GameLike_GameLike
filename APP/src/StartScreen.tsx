import * as React from 'react';
import { Text, View } from 'react-native';

const StartScreen = ({navigation}: {navigation: any}) => {
    return (
        <View>
            <Text onPress = {() => navigation.navigate('LOGIN')} >
                TOUCH THE SCREEN
            </Text>            
        </View>  
    )
}

export default StartScreen;
/*
export default class StartScreen extends React.Component{
    render() {
         return (
            <View>
                <
                <Text>
                    Touch the Screen
                </Text>
            </View>  
        );
    }

  
}
*/


