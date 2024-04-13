import { ChakraProvider,Box } from '@chakra-ui/react'

//import Homepage from './components/homepage';
import Homepage from './homepage';
import Navbar from './navbar';
import NavbarMenu from './navbarmenu';
import Product from './products/product';
import {Routes,Route} from 'react-router-dom';
import About from './about';
import AllocSubject from './timetable/subjectAllocation/subject-allocation';
const HomeMain =({isLogin,setLogin})=>{
  return (
    <ChakraProvider>

      <div className="App">
            <Navbar isLogin={isLogin} setLogin={setLogin}/>
            <Box marginLeft={"9%"} marginTop={"1%"} boxShadow={"lg"} width={"80%"} h={"50%"}>
            <NavbarMenu/>
            <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/products' element={<Product/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/subject-allocate' element={<AllocSubject/>}/>
            </Routes>
            </Box>
      
      </div>
    </ChakraProvider>
    
  );
}

export default HomeMain;