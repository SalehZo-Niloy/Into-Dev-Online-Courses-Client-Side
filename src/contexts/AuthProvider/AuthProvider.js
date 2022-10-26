import React from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, googleLogin, logout };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;