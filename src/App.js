import { ChakraProvider,Box } from '@chakra-ui/react'

import Homepage from './components/homepage';
import Login from './components/login';
import Navbar from './components/navbar';
import NavbarMenu from './components/navbarmenu';
import Product from './components/products/product';
import HomeMain from './components/homemain';
import { useState } from 'react';
function App() {
  const [isLogin,setLogin]=useState(false)
  return (
    <ChakraProvider>

      <div className="App">
        {(!isLogin)?<Login isLogin={isLogin} setLogin={setLogin}/>:<HomeMain isLogin={isLogin} setLogin={setLogin}/>}
      </div>
    </ChakraProvider>
    
  );
}

export default App;
