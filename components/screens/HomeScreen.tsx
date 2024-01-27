import { useContext } from 'react'
import {View, Text} from 'react-native'
import { AppState, ThemeContext } from '../ThemeContext'


const HomeScreen = () => {
    const appState:AppState = useContext(ThemeContext);
    const {isDarkMode, user} = appState;
    return (
        <View style={{
            backgroundColor: isDarkMode ? 'black' : 'white', 
            padding:5, 
            marginHorizontal:10, 
            marginVertical:10
            }}>
            <Text style={{color: isDarkMode? 'white' : 'black'}}>Hello {user} welcome</Text>
        </View>
    )

}

export default HomeScreen