import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ArticleDetail() {
    let location = useLocation()
    let navigate = useNavigate()
    let [article, setArticle] = useState(null)
    const params = useParams();
    console.log(location.state.article)

    useEffect(() => {
        if (location && location.state && location.state.article) {
            setArticle(location.state.article)
        } else {
            navigate("/")
        }

    }, [])

    if (article) {
        return (
            <div className=" flex justify-center  font-mono bg-gray-200 h-screen">
                <div key={article.id} id="container" className=" max-w-md h-80 flex flex-col  mb-16 rounded-3xl p-2 mt-10">  
                    <a className=""> <h2 className="flex justify-center p-6 text-2xl"> {article.title}</h2></a>
                    <h3 className="flex p-6 text-xl italic"> {article.content}</h3>
                    <a className="flex mt-16 "><h4 className="" id='colorAuthor'>Article mis en ligne depuis : {article.created_at}</h4></a>
                    <a id="abuged" className="flex mb-20 "> <h1 id='colorAuthor'className="rounded-b-3xl items-center">Auteur : {article.User.firstname + ' '+ article.User.lastname}</h1></a>
                </div>
            </div>
            )
        
    } else {
        return (<div>
            It's loading...
        </div>)
    }
}