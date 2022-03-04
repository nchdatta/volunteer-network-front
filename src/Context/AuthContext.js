import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const authContext = createContext();
const AuthContext = ({ children }) => {
    const firebaseContext = useFirebase();

    return (
        <authContext.Provider value={firebaseContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;