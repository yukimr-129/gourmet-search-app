import { Box, Center, Flex, Stack } from '@chakra-ui/layout'
import React, { ChangeEvent, KeyboardEvent, memo, useCallback, useEffect, useState, VFC } from 'react'
import { useRecoilState } from 'recoil'

import { useMessage } from '../../../customHooks/message/useMessage'
import { ReplaceKey } from '../../../store/globalState/ReplaceKey'
import { SearchKeyword } from '../../../store/globalState/SearchKeyword'
import { Position } from '../../../store/globalState/Position'
import PraimaryButton from '../../atoms/button/PraimaryButton'
import SearchInput from '../../atoms/searchInput/SearchInput'


const SearchArea: VFC = memo(() => {
    const [ inputAreaKeyword, setInputAreaKeyword ] = useState('')
    const [ keyword, setKeyword ] = useRecoilState(SearchKeyword)
    const [ replaceKey, setReplaceKey ] = useRecoilState(ReplaceKey)
    const [ position, setPosition ] = useRecoilState(Position)
    const [ doRefetch, setDoRefetch] = useState(false)
    const { showMessage } = useMessage()

    const InputKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const searchKey = e.target.value
        setKeyword(searchKey.replace(/　/g," "))
    }, [keyword])

    const SubmitEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            const key = keyword

            if (!key || !key.match(/\S/g)) {
                showMessage({title: '正しい検索条件を入力してください', status: 'error'})
            } else {
                //全角スペースを半角に置換
                const ReplaceKey = key.replace(/　/g," ")
                setReplaceKey(ReplaceKey)
                setDoRefetch(!doRefetch)

                //通常検索時は現在位置初期化
                setPosition({latitude: null, longitude: null})
            }
        }
    }, [keyword])


    //現在位置取得
    const presentLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords
            setPosition({latitude, longitude})  
            console.log(position);
        })
    }, [position])

    return (
        <Flex direction='column' justify='center' align='center' w='100%' my={5}>
                <SearchInput keyword={keyword} InputKeyword={InputKeyword} SubmitEnter={SubmitEnter} />
                <Box mt='20px'>
                    <PraimaryButton presentLocation={presentLocation} />
                </Box>
        </Flex>
    )
})

export default SearchArea
