import { createContext, useState, useEffect } from "react"

export const StoreContext = createContext()
 
export function StoreProvider(props){
    const [token, setToken] = useState([])
    const [articles, setArticles] = useState([])
    const [model, setModel] = useState(false)
    const [model2, setModel2] = useState(false)

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    return (
        <StoreContext.Provider value={{
            token : token,
            setToken: setToken,
            articles: articles,
            setArticles: setArticles,
            model: model,
            setModel: setModel,
            model2: model2,
            setModel2: setModel2,
        }}>
            {props.children}

        </StoreContext.Provider>
    )
}