import React from 'react'
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register( {closeModalRegister, closeModalLogin }, props) {

    const { register, handleSubmit, formState: {errors } } = useForm()

    const navigate = useNavigate();

    function onSubmit(data) {
        fetch('http://edu.project.etherial.fr/users', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                password_verif: data.password_verif
            })

        }).then((res) => {
            res.json().then((json) => {
                console.log(data)
                if(json.status === 201){
                    alert("Nouveau compte enregistré")
                    closeModalRegister(false)
                    closeModalLogin(true)
                    
                }else{
                    alert("échec")
                }
            })
        })
    }

    return(
        <div id='changeBgColor' className="h-full w-full bg-black flex flex-col absolute">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full ">
                    <button onClick={() => closeModalRegister(false)} className='ml-72 font-black p-1 bg-black text-white '>X</button>
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Firstname"
                            {...register("firstname")}      
                            />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Lastname"
                            {...register("lastname")}  
                            />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Email"
                            {...register("email")}  
                            />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Password"
                            {...register("password")}  
                            />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Password Confirm"
                            {...register("password_verif")}  
                            />
                            

                        <button
                            id='button_Submit'
                            type="submit"
                            className="w-full bg-grey text-center py-3 rounded my-1 "
        
                        >Create Account</button>
                    </form>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the &nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark hover:text-zinc-600" href="#">
                            Terms of Service
                        </a> and &nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue hover:text-zinc-600" href="../login/">
                        Log in
                    </a>.
                </div>
                </div>
            </div>
        </div>
    )
}

