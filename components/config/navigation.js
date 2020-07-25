import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Image ,Text, Button } from 'react-native';
import {Root, Container, Header, Left, Body, Right, Item, Input, Icon, Title, Segment, Content} from 'native-base';
import Tracks from '../Tracks';
import Artists from '../Artists';
import ArtistDetails from '../ArtistDetails'
import albums from '../Albums';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Albums from '../Albums';
import AlbumDetails from '../AlbumDetails'

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
    <ContactsStack.Navigator>
        <ContactsStack.Screen
        name="Artists"
        component={Artists}
        options={{
            headerTitle: 'Artists',
        }}
        />
        <ContactsStack.Screen
        name="ArtistDetails"
        component={ArtistDetails}
        options={({ route }) => {
            return {
            headerTitle: `${route.params.artistInfo.artist}`,
            };
        }}
        />
        <ContactsStack.Screen
        name="AlbumDetails"
        component={AlbumDetails}
        options={({ route }) => {
            return {
                    headerTitle: `${route.params.albumInfo.album}`,
                
            };
        }}
        />
    </ContactsStack.Navigator>
);
const AppTabs = createMaterialTopTabNavigator();
const AppTabsScreen = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen name="Tracks" component={Tracks} />
        <AppTabs.Screen name="Artists" component={ContactsStackScreen} />
        <AppTabs.Screen name="Albums" component={Albums} />
    </AppTabs.Navigator>
)
export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);