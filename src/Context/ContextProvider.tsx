import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface StateContextType {
  currentUser: Record<string, any> | null;
  token: string | null;
  notification: string | null;
  setUser: (user: Record<string, any>) => void;
  setToken: (token: string | null) => void;
  setNotification: (message: string) => void;
}

const defaultContext: StateContextType = {
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => { },
  setToken: () => { },
  setNotification: () => { },
};

const StateContext = createContext<StateContextType>(defaultContext);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<Record<string, any> | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const [notification, setNotificationState] = useState<string>("");

  // Load user and token from AsyncStorage on app startup
  useEffect(() => {
    const loadFromStorage = async () => {
      try {
        const savedToken = await AsyncStorage.getItem("ACCESS_TOKEN");
        const savedUser = await AsyncStorage.getItem("USER");
  
        console.log("Loaded token:", savedToken);
        console.log("Loaded user:", savedUser);
  
        if (savedToken) {
          setTokenState(savedToken);
        }
  
        if (savedUser) {
          setUserState(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };
  
    loadFromStorage();
  }, []);
  


  const setUser = async (user: Record<string, any> | null) => {
    try {
      setUserState(user);
      if (user) {
        await AsyncStorage.setItem("USER", JSON.stringify(user));
      } else {
        await AsyncStorage.removeItem("USER");
      }
    } catch (error) {
      console.error("Error saving user to AsyncStorage:", error);
    }
  };

  const setToken = async (token: string | null) => {
    try {
      setTokenState(token);
      if (token) {
        await AsyncStorage.setItem("ACCESS_TOKEN", token);
      } else {
        await AsyncStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (error) {
      console.error("Error saving token to AsyncStorage:", error);
    }
  };

  const setNotification = (message: string) => {
    setNotificationState(message);

    setTimeout(() => {
      setNotificationState("");
    }, 5000);
  };

  return (
    <StateContext.Provider
      value={{
        currentUser: user,
        setUser,
        token,
        setToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
