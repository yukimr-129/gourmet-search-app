import { Box, Center, Flex, Stack } from '@chakra-ui/layout'
import React from 'react'
import PraimaryButton from '../../atoms/button/PraimaryButton'
import SearchInput from '../../atoms/searchInput/SearchInput'

const SearchArea = () => {
    return (
        <Flex direction='column' justify='center' align='center' my={7}>
                <SearchInput />
                <Box mt='20px'>
                    <PraimaryButton />
                </Box>
        </Flex>
    )
}

export default SearchArea
