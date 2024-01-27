import { createContext } from "react";

export interface AppState {
    isDarkMode:boolean;
    user:string;
}

export const initState:AppState ={
    isDarkMode:false,
    user:'emi'
}

export const ThemeContext = createContext<AppState>(initState);