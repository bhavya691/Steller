
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    render(){
      const {longitude, latitude} = this.state
      const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
        return(
            <View style={{flex:1}}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleTxt}>Star Map Screen</Text>
                    <TextInput style={styles.input} placeholder = 'Enter your latitude' placeholderTextColor = '#fff' onChangeText = {(latitude) => {
                        this.setState({
                            latitude: latitude
                        })
                    }} />

                    <TextInput style={styles.input} placeholder = 'Enter your longitude' placeholderTextColor='#fff' onChangeText = {(longitude) => {
                        this.setState({
                            longitude: longitude
                        })
                    }} />
                </View>       
                <WebView 
                scalesPageToFit = {true}
                source = {{uri: path}}
                style = {{marginTop: -50, marginBottom: -50}}
                />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,
        width: '60%',
        height: '20%',
        marginTop: 10,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        color: '#fff',
        fontSize: 20,
        fontWeight: 600
    },
    titleBar:{
      backgroundColor: '#1F0024',
      width: '100%',
      height: '20%',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    titleTxt:{
      color: '#fff',
      fontSize: 25,
      fontWeight: "bold",
    }
})
