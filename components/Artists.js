import React, { useState, useEffect } from 'react';
import {View , Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios'

export default function Artists({navigation}) {
    const [hasError, setErrors] =  useState(false)
    const [artists, setArtists] = useState([]);

    function artistsHandler() {
        axios.get("https://api.happi.dev/v1/music/artists?page=2&apikey=2ef28dbh55jY4Oi7dBU4H0jqz54gev4Kr5A2zNmYb4Yw2VlhI2NIgqia")
        .then(function (response) {
            setArtists(response.data.result)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    useEffect( () => {
        artistsHandler()
    });
    return (
        <View>
            <ScrollView >
                {artists.map(item => (
                    <TouchableOpacity 
                    key={item.id_artist}
                    onPress={() => navigation.push('ArtistDetails', { artistInfo: item })}
                    >
                        <Text style={styles.artist_card} >{item.artist}</Text>
                    </TouchableOpacity>
                ))}
		    </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
  },
  artist_card: {
    width: '100%' ,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'black',
    padding:20,
    color:'black',
  },
  search_btn: {
    display:'flex',
    margin:15,
    marginTop:15,
  },
});