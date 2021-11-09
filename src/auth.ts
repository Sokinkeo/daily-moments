import React, { useContext } from 'react';
import { auth } from './firebase';

export const AuthContext = React.createContext({loggedIn:false});

//listen for status change

//Logout

export function logOut(){
    auth.signOut().then(()=>console.log("user is logged out"));
};


export function useAuth() {
    return useContext(AuthContext);
}