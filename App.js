import { StyleSheet} from 'react-native';
import React from 'react';
import {Container} from 'native-base';
import Navigation from './components/config/navigation';

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
