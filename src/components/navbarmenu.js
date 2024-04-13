import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps,HStack,Divider } from '@chakra-ui/react'
import "./navbar.css"
import { Flex,Box, Heading, Spacer,Text, Button } from "@chakra-ui/react";

const NavbarMenu=()=>{
    return(
        <Flex marginLeft={"25px"} w={"60px"}>

            <HStack spacing={"2px"}>
                <Button colorScheme='green' size={"lg"} variant={"ghost"}>
                    <ReactRouterLink to={"/"}>Home</ReactRouterLink>
                </Button>
            <Button colorScheme='pink'  size={"lg"} variant={"ghost"}>
                <ReactRouterLink to={"/products"}>Products</ReactRouterLink>
            </Button>
            <Button colorScheme='red' size={"lg"} variant={"ghost"}>
                <ReactRouterLink to={"/about"}>About</ReactRouterLink>
            </Button>
            <Button colorScheme='yellow' size={"lg"} variant={"ghost"}>
                <ReactRouterLink to={"/subject-allocate"}>Subj Allocate</ReactRouterLink>
            </Button>
            </HStack>
            </Flex>
      
    )
}
export default NavbarMenu;