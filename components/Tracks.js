import React, { useState, useEffect } from 'react';
import {View , Text, TouchableOpacity, StyleSheet, Image, ScrollView,} from 'react-native';
import axios from 'axios'

export default function Tracks({navigation}) {
    const [tracksList,setTrackList]= useState([]);
    function tracksListHandler() {
        axios.get('', {
            params: {
                apikey: "2ef28dbh55jY4Oi7dBU4H0jqz54gev4Kr5A2zNmYb4Yw2VlhI2NIgqia"
            }
        })
        .then(function (response) {
            setTrackList(response.data.result.tracks)
        })
        .catch(function (error) {
            console.log(error);  
        })
    }
    useEffect( () => {
        tracksListHandler();
    });
    return (
        <View>
            <Text>welcome to tracks page</Text>
        </View>
    )
}
