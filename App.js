import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Image ,Text, Button } from 'react-native';
import Constants from 'expo'
import React, { useState, useEffect } from 'react';
import {Root, Container, Header, Left, Body, Right, Item, Input, Icon, Title, Segment, Content} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'
import Navigation from './components/config/navigation';

const KEY = "e5698f8cbe6260822d208529fdd88e33";

export default function music({navigation}) {
  
  return (
    <Container style={styles.container}>
          <Navigation />
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
})
