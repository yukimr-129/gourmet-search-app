import { Box, Center, Wrap, WrapItem } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { VFC } from 'react'

import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import GourmetShopCard from '../gourmetShopCard/GourmetShopCard'

const GourmetShopList: VFC = () => {
    const { shopList, loading } = useSearchGourmet()
    console.log(shopList);
    
    return (
        <>
        {loading ? (
            <Center h='50vh'>
                <Spinner size='lg'/>
            </Center>
        ) : (
            <Wrap p={{base: 5, md: 8}} justify='center' align='center'>
                {shopList ? (
                    shopList.map((shop, index) => (
                        <WrapItem key={shop.id}>
                            <GourmetShopCard shop={shop} />
                        </WrapItem>
                    ))
                ) : null}
            </Wrap>
        )}
        </>
    )
}

export default GourmetShopList
