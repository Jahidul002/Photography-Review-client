import React from 'react';
import { createContext } from 'react';


export const authContext = createContext()

const ContextApi = ({ children }) => {





    const AuthInfo = {}
    return (
        <div>
            <authContext.Provider value={AuthInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default ContextApi;