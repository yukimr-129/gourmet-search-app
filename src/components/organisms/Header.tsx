import React from 'react'
import { Box, Flex, Heading, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import GoumetIcon from '../../icon/gourmet.svg'

const Header = () => {
    return (
        <>
            <Flex w='100%' h='' p={{base: 4, md: 6}} bg='white' shadow="md" justify='center' align='center' >
                <Image src={GoumetIcon} boxSize="35px" alt="食器アイコン" transform='rotate(-10deg)'/>
                <Heading as='h1' fontSize={{base: 'md', md: 'lg'}} mx={7}>
                    ぐるサチ
                </Heading>
                <Image src={GoumetIcon} boxSize="35px" alt="食器アイコン" transform='rotate(10deg)'/>
            </Flex>
            <Flex justify='flex-end' position='relative' top={{base: '-20px', md: '-32px'}} right='0'>
                <Link href="http://webservice.recruit.co.jp/"><Image src="http://webservice.recruit.co.jp/banner/hotpepper-m.gif" alt="ホットペッパー Webサービス" w={{base: '50px', md: '80px'}} height="35" border="0" title="ホットペッパー Webサービス" /></Link>
            </Flex>
        </>
    )
}

export default Header
