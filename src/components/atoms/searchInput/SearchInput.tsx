import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import React from 'react'

const SearchInput = () => {
    return (
        <InputGroup w='50%'>    
            <InputLeftElement 
                pointerEvents='none'
                children={<SearchIcon color="gray.300" />} 
            />
            <Input type='text'  bg='white' placeholder='search store...'/>
        </InputGroup>
    )
}

export default SearchInput
