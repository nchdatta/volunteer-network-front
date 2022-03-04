import firebaseInit from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect, useState } from "react";

// Firebase init called 
firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google signIn 
    const googleSignIn = (from) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(err => setError(err.message));
    };

    // State change observer 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // user signed Out 
            }
        });
    }, []);

    // G signOut 
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(err => setError);
    }


    return {
        user,
        error,
        googleSignIn,
        logOut,
    };

};

export default useFirebase;