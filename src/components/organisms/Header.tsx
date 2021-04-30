import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/layout'

// import GoumetIcon from '../../icon/gourmet.svg'
import GoumetIcon from '../../icon/gourmet.svg'
import { Image } from '@chakra-ui/image'

const Header = () => {
    return (
        <Flex w='100%' h='' p={{base: 4, md: 6}} bg='white' shadow="md" justify='center' align='center'>
            <Image src={GoumetIcon} boxSize="35px" alt="食器アイコン" transform='rotate(-10deg)'/>
            <Heading as='h1' fontSize={{base: 'md', md: 'lg'}} mx={7}>
                ぐるサチ
            </Heading>
            <Image src={GoumetIcon} boxSize="35px" alt="食器アイコン" transform='rotate(10deg)'/>
        </Flex>
    )
}

export default Header
