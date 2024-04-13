import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps,HStack,Divider,Image } from '@chakra-ui/react'
import "./navbar.css"
import { Flex,Box, Heading, Spacer,Text, Button } from "@chakra-ui/react";
/*
<HStack spacing={"5px"}>
<ChakraLink bg={"green.200"} as={"ReactRouterLink"} to={"/"} >
    <Text fontSize={"24px"}>Home</Text>
    </ChakraLink>
<ChakraLink bg="pink.200" as={"ReactRouterLink"} to={"/products"}>
    <Text fontSize={"24px"}>Products</Text></ChakraLink>
<ChakraLink bg={"red.200"} as={"ReactRouterLink"} to={"/about"} >
    <Text fontSize={"24px"}>About</Text></ChakraLink>

</HStack>
*/
const Navbar=({isLogin,setLogin})=>{

    function make_logout(isLogin,setLogin){
        if(isLogin){
            setLogin(false);
        }
    }
    return(
    
        <Flex as={"nav"} p={"25px"} alignItems={"center"}>
            <Image
                borderRadius='full'
                    boxSize='80px'
                    src='images/login/login1.jpg'
                    alt='Dan Abramov'
                />
            <Heading alignSelf={"center"}>
            
                Find My Product</Heading>
            <Spacer/>
            
            <Box bg={"gray.200"} p={"10px"}>M</Box>
            <Text>sujit4uwbslg@gmail.com</Text>
            <Button bg={"purple.200"} onClick={()=>make_logout(isLogin,setLogin)}>Logout</Button>
        </Flex>
       /*<Flex wrap={"wrap"} gap={"2"} justify={"space-between"}>
        <Box bg="gray.300" width={"150px"} height={"50px"} >Home</Box>
        <Box bg="red.300" width={"150px"} height={"50px"} >Edit</Box>
        <Box bg="green.300" width={"150px"} height={"50px"} >About</Box>
        <Box bg="yellow.300" width={"150px"} height={"50px"} >Help</Box>
       </Flex>*/
    )
}
export default Navbar;