import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface StateContextType {
  currentUser: Record<string, any> | null; // Adjust based on your user object structure
  token: string | null;
  notification: string | null;
  setUser: (user: Record<string, any>) => void;
  setToken: (token: string | null) => void;
  setNotification: (message: string) => void;
}

// Define the default values for the context
const defaultContext: StateContextType = {
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
};

// Create the context with default values
const StateContext = createContext<StateContextType>(defaultContext);

// Define props for the provider component
interface ContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Record<string, any>>({});
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("ACCESS_TOKEN")
  );
  const [notification, _setNotification] = useState<string>("");

  // Handle setting and removing the token
  const setToken = (token: string | null) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  // Handle setting notifications with timeout
  const setNotification = (message: string) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification("");
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

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
