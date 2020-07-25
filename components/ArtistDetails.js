import React, { useState, useEffect } from 'react';
import {View , Text, TouchableOpacity, StyleSheet, Image, ScrollView,} from 'react-native';
import axios from 'axios'

export default function ArtistDetails({route,navigation}) {
    const [error, setErrors] = useState("");
    const [albums, setAlbums] = useState([]);
    const [artist, setArtist] = useState({});
    
    const artistInfo = route.params.artistInfo;
    const artistId = route.params.artistInfo.id_artist;
    const artistApi = route.params.artistInfo.api_artist;
    const artistAlbumsApi = route.params.artistInfo.api_albums;


    function artistInformation() {
        axios.get(artistApi+"?apikey=2ef28dbh55jY4Oi7dBU4H0jqz54gev4Kr5A2zNmYb4Yw2VlhI2NIgqia")
        .then(function (response) {
            setArtist(response.result)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    function albumsHandler() {
        axios.get(artistAlbumsApi, {
            params: {
                apikey: "2ef28dbh55jY4Oi7dBU4H0jqz54gev4Kr5A2zNmYb4Yw2VlhI2NIgqia"
            }
          })
        .then(function (response) {
            setAlbums(response.data.result.albums)
        })
        .catch(function (error) {
            console.log(error);  
        })
    }
    
    useEffect( () => {
        artistInformation();
        albumsHandler();
    });
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.albumTitle}>Albums</Text>
            {albums.map(item => (
                    <TouchableOpacity
                    key={item.id_album}
                    style={styles.albumCard}
                    onPress={() => navigation.push('AlbumDetails', { albumInfo: item })}
                    >
                        <Image
                            source={{uri: item.cover }}
                            style={styles.albumCard_img}
                        />
                        <Text>{item.album}</Text>
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