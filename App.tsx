import React, {useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Switch,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'blue', flexDirection: 'column'}}>
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text>flex 1</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>flex 2</Text>
      </View>
      <View style={{flex: 4, backgroundColor: 'yellow'}}>
        <Text>flex 3</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
