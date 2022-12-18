import { StoreContext } from "../Providers/Store"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function CreationArticle(){
    const { token, setToken } = useContext(StoreContext)
    const { register, handleSubmit, formState: {errors } } = useForm()
    let navigate = useNavigate()

    function CreateArticle(data){
            fetch('http://edu.project.etherial.fr/articles', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json',
                            'Authorization': 'Bearer ' + token
            },
                
                body: JSON.stringify({
                    title: data.title,
                    content: data.content,
                    article_category_id: data.article_category_id
                })
            }).then((res) => {
                res.json().then((json) => {
                    if(json.status === 200 || json.status === 201){
                        alert('article crée')
                        navigate('/')
                    }
                    else{
                        alert('échec')
                        console.log(data)
                    }
                })
            })
    }
    return(
        <div class="h-screen bg-gray-600 flex justify-center items-center">
            <form onSubmit={handleSubmit(CreateArticle)} class="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" action="">
                    <label class="text-gray-700 font-bold py-2">Title</label>
                    <input 
                    class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3" 
                    type="text" placeholder="Title"
                    {...register('title')}
                    />
                    <label class="text-gray-700 font-bold py-2">Content</label>
                    <input 
                    class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                     type="text" 
                     placeholder="Content"
                     {...register('content')}
                     />
                    <label class="text-gray-700 font-bold py-2">Category</label>
                    <input class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                     type="text" 
                     placeholder="Category"
                     {...register('article_category_id')}
                     />
                <div class="flex justify-between items-center my-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
                    Create new Article
                        </button>
                </div>
            </form>
        </div>
    )
}


