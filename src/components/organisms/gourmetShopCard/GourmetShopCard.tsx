import { Image } from '@chakra-ui/image'
import { Badge, Box, Divider, Flex, HStack, Link, Stack, Text } from '@chakra-ui/layout'
import React, { memo, useCallback, VFC } from 'react'
import { useHistory } from 'react-router'

import { Shop } from '../../../types/api/Shop'
import informationIcon from '../../../icon/information_icon16.svg'

type Props = {
    shop: Shop;
}

const GourmetShopCard: VFC<Props> = memo((props) => {
    const { shop } = props

    //店舗詳細へ遷移
    const history = useHistory()
    const onClickDetailPage = useCallback(() => {
        history.push({pathname: `detail/${shop.id}`, state: shop})
    }, [shop])

    return (
        <Link _hover={{opacity: 0.8}} onClick={onClickDetailPage}>
            <Box w='350px' h='450px' bg='white' borderRadius='10px' shadow='md' m={4}　>
                <Image src={shop.photo.pc.l} borderRadius='10px 10px 0 0' w='100%'　h='70%' objectFit='cover'/>
                <Flex align='flex-start' mb={3}>
                    <HStack direction="row" mr='5px'>
                        <Badge p={1} variant='solid' colorScheme='green'>
                            {shop.genre.name}
                        </Badge>
                    </HStack>
                    <Text fontSize="xs">{shop.genre.catch}</Text>
                </Flex>
                <Stack ml='5px' spacing={1}>
                    <Text fontSize="md">{shop.name}</Text>
                    <Text fontSize="xs"><Image src={informationIcon} boxSize="15px" mr='5px' display='inline-block'/>{shop.access}</Text>
                </Stack>
            </Box>
        </Link>
    )
})

export default GourmetShopCard
