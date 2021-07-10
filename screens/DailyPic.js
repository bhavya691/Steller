import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity, ImageBackground, Image, SafeAreaView, Platform, Linking, FlatList, Alert } from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apod: {}
        }
    }

    getAPI = () => {
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
        .then(response => {this.setState({apod: response.data.results})
        }).catch(error => {Alert.alert(error.message)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({item}) => {
        return(
            <View style={{borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10, elevation: 10}}>
                <Image source={{uri: item.agency.image_url}} style={{width: '100%', height: 200, marginTop: 15, marginBottom: 15, marginRight: 10}}/>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
                <Text style={{color: '#696969'}}>{item.agency.name}</Text>
                <Text>Description</Text>
                <Text style={{color: '#a9a9a9', marginLeft: 10, marginRight: 10}}>{item.agency.description}</Text>
            </View>
        )
    }

    componentDidMount(){
        this.getAPI();
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <SafeAreaView style={styles.droidSafeArea}/> */}
                <ImageBackground source={require('../assets/daily_pic_bg.jpg')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Steller - Daily Pic</Text>
                    </View>
                    <View style={styles.apiContainer}>
                    <FlatList 
                        keyExtractor = {this.keyExtractor}
                        data={this.state.apod}
                        renderItem = {this.renderItem}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                    />
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

