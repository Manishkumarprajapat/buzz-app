import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class FacebookScreen extends React.Component{
    render() {
        return(
        <View>
        <Text style = {styles.text}>Welcome To Facebook </Text> 
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