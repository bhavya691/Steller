import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, ImageBackground, Image, SafeAreaView, Platform, Linking } from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apod: {}
        }
    }

    getAPI = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=uwCIyIDblT9ulD3nI4yMNeHvUqfJ8lK9uOfik8gc')
        .then(response => {this.setState({apod: response.data})
        }).catch(error => {Alert.alert(error.message)
        })
    }

    componentDidMount(){
        this.getAPI();
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/daily_pic_bg.jpg')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Steller - Daily Pic</Text>
                    </View>
                    <View style={styles.apiContainer}>
                    <Text style={styles.routeText}>Astronomy Pictures of the day</Text>
                    <Text style={styles.routeTitle}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer} onPress = {() => Linking.openURL(this.state.apod.url).catch(err => console.error('Could not load page', err))}>
                        <View style = {styles.iconContainer}>
                            <Image source={require('../assets/play-video.png')} style={styles.playIcon} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.explaination}>{this.state.apod.explaination}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    droidSafeArea:{
        marginTop: Platform.OS === 'android' ? statusbar.currentHeight : 0
    },
    bgImage:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    apiContainer:{
        marginTop: 40,
        width: '60%',
        height: '80%',
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    routeText:{
        fontSize: 40,
        color: '#FB00FC',
        fontWeight: 'bold',
    },
    routeTitle:{
        fontSize: 40,
        color: 'rgb(249, 240, 0)',
        fontWeight: 'bold'
    },
    titleBar:{
        width: '100%',
        height: '10%',
        textAlign: 'center',
        backgroundColor: '#00cbff'
    },
    titleText:{
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold'
    },
    playIcon:{
        width: 50, 
        height: 50, 
    }
})

