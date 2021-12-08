import { createContext,useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export function AuthProvider({children}){
    const [token, setToken] = useState();

    return (
      <AuthContext.Provider value={{token, setToken}}>
        <AuthContext.Consumer>
            {() => children         }
        </AuthContext.Consumer>
    </AuthContext.Provider>
    )}