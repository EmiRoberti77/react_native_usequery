import React , { useRef, useState } from 'react';
import { 
  Button, 
  SafeAreaView, 
  ScrollView, 
  View, 
  StyleSheet, 
  Text, 
  Image,
  TextInput
} from 'react-native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import TodoList from './components/TodoList';
import { AppState, ThemeContext, initState } from './components/ThemeContext';
import HomeScreen from './components/screens/HomeScreen';
import useToggle from './components/custom_hooks/UseToggle';
const imageUri = 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg';



function App(): React.JSX.Element {
    const client = new QueryClient();
    const [isOn, toogle] = useToggle();
    const scrollViewRef = useRef<ScrollView>(null);
    const [appState, setAppState] = useState<AppState>(initState);
    const [inputText, setInputText] = useState<string>('');
    //const imagePath = join(__dirname, 'assets', 'images', 'cake.png')

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
      <TextInput 
        value={inputText}
        style={{borderColor:'blue', borderWidth:1, padding:15, marginTop:20}}
        onChangeText={value=>setInputText(value)}
        placeholder='add text here'
      />
      <Text>{inputText}</Text>
      <HomeScreen/>
      <Text
        style={{ alignContent: 'center', textAlign: 'center' }}>
          {isOn ? 'READY' : 'STANDBY'}
      </Text>
      <View style={{flexDirection:'row'}}>
        <Image 
          source={require('./assets/images/cake.png')} 
          style={{height:100, width:120, zIndex:2, opacity:1}}      
          onError={()=>{
            console.log('error while loading image')
          }}
          resizeMode='repeat'
          />
        <Image 
          source={{
            uri:imageUri
          }}
          style={{height:100, width:200}}
          resizeMode='repeat'
        />
      </View>
      <Button title='mode' onPress={toogle}></Button>
        <View style={{padding:5, marginBottom:5, marginTop:5}}>
          <Button onPress={handleBackToTop} title='Back to Top' />
          <Button onPress={toggleTheme} title='toogle theme' />
        </View>
        <ScrollView style={{
          zIndex:1
        }}ref={scrollViewRef}>
          <TodoList />
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default App;

