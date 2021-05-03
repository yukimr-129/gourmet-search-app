import { Box, Center, Flex, Stack } from '@chakra-ui/layout'
import React, { VFC } from 'react'
import PraimaryButton from '../../atoms/button/PraimaryButton'
import SearchInput from '../../atoms/searchInput/SearchInput'

const SearchArea: VFC = () => {
    return (
        <Flex direction='column' justify='center' align='center' w='100%' my={5}>
                <SearchInput />
                <Box mt='20px'>
                    <PraimaryButton />
                </Box>
        </Flex>
    )
}

export default SearchArea
