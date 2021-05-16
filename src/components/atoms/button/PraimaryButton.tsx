import { Button } from '@chakra-ui/button'
import { TriangleUpIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout';
import React, { memo, VFC } from 'react'
import { IoMdPin } from "react-icons/io";

const PraimaryButton: VFC = memo(() => {
    return (
        <Button leftIcon={<IoMdPin fontSize='20px'/>} iconSpacing='5px' colorScheme="pink" variant="solid"  _hover={{opacity: 0.7}}>
            <Text as='p' lineHeight='40px'>
                現在地からお店を検索
            </Text>
        </Button>
    )
})

export default PraimaryButton
