import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}