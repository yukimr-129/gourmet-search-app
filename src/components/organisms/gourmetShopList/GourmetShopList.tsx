import { Box, Wrap, WrapItem } from '@chakra-ui/layout'
import React, { VFC } from 'react'
import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import GourmetShopCard from '../gourmetShopCard/GourmetShopCard'

const GourmetShopList: VFC = () => {
    const { shopList } = useSearchGourmet()
    console.log(shopList);
    
    return (
        <Wrap p={{base: 5, md: 8}} justify='center' align='center'>
            {shopList.map((shop, index) => (
                    <WrapItem key={shop.id}>
                        <GourmetShopCard shop={shop} />
                    </WrapItem>
            ))}
        </Wrap>
    )
}

export default GourmetShopList
