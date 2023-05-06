import React, { useState ,createContext,children} from "react";

export let AuthContext = createContext();
export default function AuthContextProvider({children}) {
  const [isloggedin, setisloggedin] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });
  return <div>
     <AuthContext.Provider value={{isloggedin,setisloggedin}}>{children}</AuthContext.Provider>
  </div>;
}
