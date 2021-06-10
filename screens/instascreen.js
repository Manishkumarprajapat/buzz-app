import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class InstagramScreen extends React.Component{
    render() {
        return(
        <View>
        <Text  style = {styles.text}>Welcome To Instagram</Text>  
        </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
    }
})
