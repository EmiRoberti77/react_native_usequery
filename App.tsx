import React , {useRef, useState} from 'react';
import { Button, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import TodoList from './components/TodoList';
import { AppState, ThemeContext, initState } from './components/ThemeContext';
import HomeScreen from './components/screens/HomeScreen';

function App(): React.JSX.Element {
    const client = new QueryClient();
    const scrollViewRef = useRef<ScrollView>(null);
    const [appState, setAppState] = useState<AppState>(initState);

    const styles = StyleSheet.create({
      main:{
        backgroundColor: appState?.isDarkMode ? 'black' : 'white'
      }
    })

    const toggleTheme = () => {
      setAppState((prevState:AppState)=>({
        ...prevState,
        isDarkMode:!prevState.isDarkMode
      }))
    };

    const handleBackToTop = () => {
      scrollViewRef.current?.scrollTo({
        x:0,
        y:0,
        animated:true
      })
    }
  return (
    <ThemeContext.Provider value={appState}>
    <QueryClientProvider client={client}>       
      <SafeAreaView style={styles.main}>
      <HomeScreen/>
        <View style={{padding:5, marginBottom:5, marginTop:5}}>
          <Button onPress={handleBackToTop} title='Back to Top' />
          <Button onPress={toggleTheme} title='toogle theme' />
        </View>
        <ScrollView ref={scrollViewRef}><TodoList /></ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default App;

