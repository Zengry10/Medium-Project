import { useState, useContext, useEffect } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ArticleDetail from './Screens/ArticleDetail'
import Home from './Screens/Home'
import { StoreProvider, StoreContext } from './Providers/Store'
import CreateArticle from './Screens/CreateArticle'
import Header from './Screens/Header'
import Map from './Screens/Map'





function App() {
 

  let [article, setArticle] = useState(null)
  return (
    <div id="bodyy" className="App  m-0  ">
      <StoreProvider>
        <BrowserRouter>
        <Header/>       

         
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/article/detail/:id' element={<ArticleDetail />}></Route>
            <Route path='/createArticle' element={<CreateArticle />}></Route>
            <Route path='/map' element={<Map />}></Route>

          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
   