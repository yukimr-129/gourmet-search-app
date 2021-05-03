import { Button } from '@chakra-ui/button'
import { TriangleUpIcon } from '@chakra-ui/icons'
import React, { VFC } from 'react'

const PraimaryButton: VFC = () => {
    return (
        <Button leftIcon={<TriangleUpIcon />} p={2} colorScheme="pink" variant="solid" w='200px' _hover={{opacity: 0.7}}>
            現在地からお店を検索
        </Button>
    )
}

export default PraimaryButton
