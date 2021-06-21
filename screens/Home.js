import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar</Text>
                        <Image source={require('../assets/main-icon.png')} style={{height: 300, width: 300}}></Image>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('StarMap')}>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Text style={styles.knowMore}>Know More</Text>
                        <Text style={styles.digit}>1</Text>
                        <Image source={require('../assets/star_map.png')} style={styles.icon}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('DailyPic')}>
                        <Text style={styles.routeText}>Daily Pic</Text>
                        <Text style={styles.knowMore}>Know More</Text>
                        <Text style={styles.digit}>2</Text>
                        <Image source={require('../assets/daily_pictures.png')} style={styles.icon}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate('SpaceCraft')}>
                        <Text style={styles.routeText}>Space Craft</Text>
                        <Text style={styles.knowMore}>Know More</Text>
                        <Text style={styles.digit}>3</Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidArea:{
        marginTop: Platform.OS === "android" ? statusbar.currentHeight : 0
    },
    bgImage:{
        resizeMode: 'cover',
        flex: 1
    },
    routeCard:{
        flex: 0.25,
        marginLeft: 50,
        marginTop: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    routeText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 75,
        paddingLeft: 35
    },
    knowMore:{
        color: 'red',
        fontSize: 16,
        paddingLeft: 30
    },
    digit:{
        position: 'absolute',
        fontSize: 100,
        color: 'rgba(183,183,183,0.6)',
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    icon:{
        height: 150,
        width: 150,
        resizeMode: 'contain',
        left: 1250,
        top: -150
    },
    titleBar:{
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    }
})