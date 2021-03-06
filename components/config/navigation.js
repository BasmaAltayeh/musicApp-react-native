import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tracks from '../Tracks';
import Artists from '../Artists';
import ArtistDetails from '../ArtistDetails'
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