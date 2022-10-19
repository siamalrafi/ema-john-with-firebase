import React, { createContext } from 'react';


export const AuthContext = createContext();


const user = { email: 'abc' };
const authInfo = { user };


const UserContext = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;