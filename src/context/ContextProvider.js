import React, { createContext, useContext,useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu,setActiveMenu] = useState(true);
    const [isClicked,setisClicked] = useState(initialState);
    const [screenSize,setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode,setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    
    
    const setMode = (setMode) => {
        setcurrentMode(mode);
        localStorage.setItem('themeMode',mode);
        setThemeSettings(false);
    }
    const setColor = (color) => {
        setcurrentColor(color);
        localStorage.setItem('colorMode',color);
        setThemeSettings(false);
    }
    const handleClick = (clicked) => {
        setisClicked({...initialState, [clicked]: true });
    }
    
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,currentMode,
            setcurrentColor,setcurrentMode,
            themeSettings,setThemeSettings,
            setMode,setColor
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);