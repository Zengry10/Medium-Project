import { createContext, useState, useEffect } from "react"

export const StoreContext = createContext()
 
export function StoreProvider(props){
    const [token, setToken] = useState([])

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    return (
        <StoreContext.Provider value={{
            token : token,
            setToken: setToken,
        }}>
        {props.children}

        </StoreContext.Provider>
    )
}