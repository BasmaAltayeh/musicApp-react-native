import React, { useState, useEffect } from 'react';
import {View , Text, TouchableOpacity, StyleSheet, Image, ScrollView,} from 'react-native';
import axios from 'axios'

export default ({ route }) => {
  const albumInfo= route.params.albumInfo;
  const albumId= route.params.albumInfo.id_album;
  const tracksApi= route.params.albumInfo.api_tracks;

  
  const [tracks, setTracks] = useState([]);

    function tracksHandler() {
        axios.get(tracksApi, {
            params: {
                apikey: "2ef28dbh55jY4Oi7dBU4H0jqz54gev4Kr5A2zNmYb4Yw2VlhI2NIgqia"
            }
        })
        .then(function (response) {
            setTracks(response.data.result.tracks)
        })
        .catch(function (error) {
            console.log(error);  
        })
    }
    useEffect( () => {
        tracksHandler();
    });
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.albumTitle}>Tracks</Text>
            {tracks.map(item => (
                    <TouchableOpacity
                    key={item.id_track}
                    style={styles.albumCard}
                    >
                        <Text>{item.track}</Text>
                    </TouchableOpacity>
                ))}
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding:20
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
  albumTitle :{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:20
  },
  albumCard :{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'white',
      padding:20,
      marginBottom:10

  },
  albumCard_img: {
    marginRight:30,
    width: 50,
    height: 50
  }
});