import { setItem } from "localforage";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StoreContext } from "../Providers/Store";
import { useNavigate } from "react-router-dom";

export default function Login( {closeModalLogin, closeModalRegister} ) {

    let navigate = useNavigate()

    const { token, setToken } = useContext(StoreContext)
    const { register, handleSubmit, formState: {errors } } = useForm()

    function Connect(data){
        fetch('http://edu.project.etherial.fr/auth', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then((res) => {
            res.json().then((json) => {
                if (json.status === 201 || json.status === 200){
                    alert('Connexion Etablie')
                    localStorage.setItem('token', json.data.token)
                    setToken(json.data.token)
                    navigate('/')
                    closeModalLogin(false)
                }
                else{
                    alert('Erreur lors de la connexion, identifiants ou mot de passe incorrect')
                }
            })
        })
    }

    return (
        <div id='changeBgColor' className="h-full w-full flex flex-col absolute">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <button onClick={() => closeModalLogin(false)} className='ml-72 font-black p-1 bg-black text-white '>X</button>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                    <form onSubmit={handleSubmit(Connect)}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            {...register('email')} />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            {...register('password')} />
                        
                        <button
                                id='button_Submit'
                                type="submit"
                                className="w-full bg-grey text-center py-3 rounded my-1 "
                            >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="text-grey-dark mt-6">
                    Don't have account &nbsp;
                    <a className="no-underline border-b border-blue text-blue" href="#">
                        Register In
                    </a>.
                </div>
                </div>


            </div>
        </div>

    )
}