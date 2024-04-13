import { Box,Text,FormControl,Input,Button,Stack,Heading,Divider,InputGroup,InputLeftElement} from "@chakra-ui/react"
import {PhoneIcon, AddIcon, WarningIcon,EmailIcon,UnlockIcon,CalendarIcon} from '@chakra-ui/icons'
import Calendar from 'react-calendar';
import { useState } from "react";



function ckeklogin(isLogin,setLogin){
    if(!isLogin){
        setLogin(true);
    }else{
        setLogin(false)
    }
}

const Login=({isLogin,setLogin})=>{
    
    const [value, onChange] = useState(new Date());
    return(
        
            <Box marginLeft={"400px"} marginTop={"100px"} display={"flex"} w="1024px" 
            h={"720ps"} bg={"white.300"}  boxShadow={"lg"} gap={"4px"} 
             
            >
            <Box w={"510px"} height={"720"} bgGradient='linear(to-r, gray.300, yellow.400, green.100)'>
                <Heading textDecoration={"Highlight"} mb={"4"}>
                    New User Restration Form
                </Heading>
               

            </Box>
            <Divider orientation="vertical"/>
            <Box w={"510px"} height={"720"} bgGradient="radial(gray.300, yellow.400, pink.200)">
                <Box margin={"20%"}>
                    <FormControl>
                        <Stack spacing={"10px"}>
                        <Input  focusBorderColor='pink.400' type="name" placeholder="First Name" bg={"white.300"}/>
                        <Input  focusBorderColor='pink.400' type="name" placeholder="Last Name" bg={"white.300"}/>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                    <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input focusBorderColor='pink.400' type="number" placeholder="Phone Nimber" bg={"white.300"}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                    <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input  focusBorderColor='pink.400' type="email" placeholder="Email" bg={"white.300"}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                    <UnlockIcon color='gray.300' />
                            </InputLeftElement>
                            <Input  focusBorderColor='pink.400' type="password" placeholder="Password" bg={"white.300"}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                    <CalendarIcon color='gray.300' />
                            </InputLeftElement>
                            <Input  focusBorderColor='pink.400' type="date" placeholder="Date of Birth" bg={"white.300"}/>
                        </InputGroup>
                        <Input type="file" placeholder="Upload CV" />
                        <Button colorScheme="green" mt={"24px"} type="submit" w={"40%"} marginLeft={"40%"}
                        onClick={()=>ckeklogin(isLogin,setLogin)}
                        >Register</Button>
                        </Stack>
                        
                    </FormControl>
                </Box>
            </Box>
        </Box>
        
        
    )
}
export default Login;