import React , {useRef} from 'react';
import { Button, SafeAreaView, ScrollView, View } from 'react-native';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import TodoList from './components/TodoList';

function App(): React.JSX.Element {
    const client = new QueryClient();
    const scrollViewRef = useRef<ScrollView>(null);
    const handleBackToTop = () => {
      scrollViewRef.current?.scrollTo({
        x:0,
        y:0,
        animated:true
      })
    }
  return (

    <QueryClientProvider client={client}>       
      <SafeAreaView>
        <View style={{padding:5, marginBottom:5, marginTop:5}}>
          <Button onPress={handleBackToTop} title='Back to Top' />
        </View>
        <ScrollView ref={scrollViewRef}><TodoList /></ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
