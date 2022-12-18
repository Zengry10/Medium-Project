import { Link } from 'react-router-dom';
import { useState } from "react"
import Register from '../Modal/Register'
import Login from '../Modal/Login'
import { useContext } from "react";
import { StoreContext } from "../Providers/Store";
export default function Header(){

    const { token, setToken } = useContext(StoreContext)
    let [model, setModel] = useState(false)
    let [model2, setModel2] = useState(false)

    function Logout(){
        setToken(localStorage.removeItem('token'))
    }



    return(
        <nav className="flex gap-6 text-xl justify-between ">
            <Link to='/'><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png" className="p-4 h-14 w-14"></img></Link>

          { !token && 
          
                <ul className="flex justify-end gap-6 p-4">
  
                <li className="hover:underline" onClick={() => { setModel(true); setModel2(false) }}>Register</li>
                <li className="hover:underline" onClick={() => { setModel2(true); setModel(false) }} >Sign In</li>
              </ul>
             }
             { token &&
                          <ul className='flex justify-center gap-6 p-4'>
                          <li className='hover:underline ml-44'><button onClick={(e) => setToken(localStorage.removeItem('token'))}>Logout</button>  </li>
                          <li className='hover:underline'> <Link to="/createArticle"> Create Article </Link> </li>
                      </ul>
             }

            {model && <Register closeModalRegister={setModel} closeModalLogin={setModel2}/>}
            {model2 && <Login closeModalLogin={setModel2} closeModalRegister={setModel}/>}
        </nav>
    )
}