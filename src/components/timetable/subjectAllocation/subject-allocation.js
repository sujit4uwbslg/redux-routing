import {Box,
     Input, 
     InputGroup,
    InputLeftElement,
    Divider,
    FormControl,
    Button,
    Stack,
    Heading,
    Select
} from '@chakra-ui/react'

const AllocSubject=()=>{
    return(
            <form>
                <FormControl>
                    <InputGroup>
                        <Input type='name' placeholder='First Name'/>
                    </InputGroup>
                    <InputGroup>
                        <Input type='name' placeholder='Last Name'/>
                    </InputGroup>
                    <InputGroup>
                        <Input type="text" placeholder='Subject'/>
                    </InputGroup>
                    <InputGroup>
                        <Input type='text' placeholder='Year/Sem'/>
                    </InputGroup>
                    <InputGroup>
                        <Select placeholder='Select Section'>
                            <option value='alpha'>Alpha</option>
                            <option value='beta'>Beta</option>
                            <option value='gamma'>Gamma</option>
                            <option value='delta'>Delta</option>
                            <option value='sigma'>Sigma</option>
                            <option value='omega'>Omega</option>
                            <option value='zeta'>Zeta</option>
                            <option value='epsilon'>Epsilon</option>
                        </Select>
                    </InputGroup>
                    <InputGroup>
                        <Input type='text' placeholder='Lab'/>
                    </InputGroup>
                    <InputGroup>
                    <Select placeholder='Lab Responsibility'>
                        <option value='first_person'>First Persion</option>
                        <option value='second_person'>Second Person</option>
                        <option value='third_person'>Third Person</option>
                    </Select>
                    </InputGroup>
                    <Button type='submit'>Submit</Button>
                </FormControl>
            </form>
        
    )
}

export default AllocSubject;