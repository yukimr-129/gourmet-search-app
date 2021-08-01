import { Box, Center, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { memo, VFC, useState, useEffect } from 'react'

import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import GourmetShopCard from '../gourmetShopCard/GourmetShopCard'
import { SearchResult } from '../../../store/globalState/SearchResult'
import { FirstMessageFlag } from '../../../store/globalState/FirstMessageFlag'
import { useRecoilState } from 'recoil'

const GourmetShopList: VFC = memo(() => {
    const { shopList, loading } = useSearchGourmet()
    const [firstMessageFlag, setFirstMessageFlag] = useRecoilState(FirstMessageFlag)
    console.log(shopList);
    
    const listLength = shopList.length

    useEffect(() => {
        setFirstMessageFlag(true)
    }, [])
    
    return (
        <>
        {loading ? (
            <Center h='60vh'>
                <Spinner size='md' />
            </Center>
        ) : (
            <Wrap p={{base: 5, md: 8}} justify='center' align='center'>
                {listLength ? (
                    shopList.map((shop, index) => (
                        <WrapItem key={shop.id}>
                            <GourmetShopCard shop={shop} />
                        </WrapItem>
                    ))
                ) : (
                        <Center>
                            {firstMessageFlag ? (
                                <Box>
                                    <Text color='gray.600' fontWeight='bold'>お店を検索してください</Text>
                                </Box>
                            ) : (
                                <Box>
                                    <Text color='gray.600' fontWeight='bold'>該当するお店がありません</Text>
                                </Box>
                            )}
                        </Center>
                    )
                }
            </Wrap>
        )}
        </>
    )
})

export default GourmetShopList
