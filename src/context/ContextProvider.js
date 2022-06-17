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
    const handleClick = (clicked) => {
        setisClicked({...initialState, [clicked]: true });
    }
    const [screenSize,setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode,setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);


    const setMode = (e) => {
        setcurrentMode(e.target.value);
        localStorage.setItem('themeMode',e.target.value)
    }
    const setColor = (e) => {
        setcurrentColor(e.target.value);
        localStorage.setItem('themeMColor',e.target.value)
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
            themeSettings,setThemeSettings
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);