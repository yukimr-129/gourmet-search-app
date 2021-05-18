import { Box, Center, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { memo, VFC } from 'react'
import { useMessage } from '../../../customHooks/message/useMessage'

import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import GourmetShopCard from '../gourmetShopCard/GourmetShopCard'

const GourmetShopList: VFC = memo(() => {
    const { shopList, loading } = useSearchGourmet()
    const shop = shopList
    const Listlength = shop?.length
    console.log(shopList);
    console.log(Listlength);
    
    return (
        <>
        {loading ? (
            <Center h='60vh'>
                <Spinner size='md' />
            </Center>
        ) : (
            <Wrap p={{base: 5, md: 8}} justify='center' align='center'>
                {shopList ? (
                    shopList.map((shop, index) => (
                        <WrapItem key={shop.id}>
                            <GourmetShopCard shop={shop} />
                        </WrapItem>
                    ))
                ) : (
                        Listlength === 0 ? (
                            <Center>
                                <Box>
                                    <Text color='gray.600' fontWeight='bold'>該当するお店がありません</Text>
                                </Box>
                            </Center>
                        ) : null
                    )
                }
            </Wrap>
        )}
        </>
    )
})

export default GourmetShopList
