import React , {useRef, useState} from 'react';
import { Button, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import TodoList from './components/TodoList';

function App(): React.JSX.Element {
    const client = new QueryClient();
    const scrollViewRef = useRef<ScrollView>(null);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const styles = StyleSheet.create({
      main:{
        backgroundColor: isDarkMode ? 'black' : 'white'
      }
    })

    const handleBackToTop = () => {
      scrollViewRef.current?.scrollTo({
        x:0,
        y:0,
        animated:true
      })
    }
  return (

    <QueryClientProvider client={client}>       
      <SafeAreaView style={styles.main}>
        <View style={{padding:5, marginBottom:5, marginTop:5}}>
          <Button onPress={handleBackToTop} title='Back to Top' />
        </View>
        <ScrollView ref={scrollViewRef}><TodoList /></ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;

