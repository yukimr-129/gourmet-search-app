import { Box, Wrap, WrapItem } from '@chakra-ui/layout'
import React from 'react'

const GourmetStoreList = () => {
    return (
        <Wrap p={{base: 5, md: 8}} justify='center' align='center'>
            <WrapItem>
                <Box w='300px' h='350px' bg='white' borderRadius='10px' shadow='md' p={2} m={4}>

                </Box>
            </WrapItem>
            <WrapItem>
                <Box w='300px' h='350px' bg='white' borderRadius='10px' shadow='md' p={2} m={4}>

                </Box>
            </WrapItem>
            <WrapItem>
                <Box w='300px' h='350px' bg='white' borderRadius='10px' shadow='md' p={2} m={4}>

                </Box>
            </WrapItem>
            <WrapItem>
                <Box w='300px' h='350px' bg='white' borderRadius='10px' shadow='md' p={2} m={4}>

                </Box>
            </WrapItem>
        </Wrap>
    )
}

export default GourmetStoreList
