import { Box, Center, Flex, Stack } from '@chakra-ui/layout'
import React, { ChangeEvent, KeyboardEvent, memo, useCallback, useEffect, useState, VFC } from 'react'
import { useRecoilState } from 'recoil'

import { useMessage } from '../../../customHooks/message/useMessage'
import { ReplaceKey } from '../../../store/globalState/ReplaceKey'
import { SearchKeyword } from '../../../store/globalState/SearchKeyword'
import { Position } from '../../../store/globalState/Position'
import PraimaryButton from '../../atoms/button/PraimaryButton'
import SearchInput from '../../atoms/searchInput/SearchInput'

// type initwatchStatusType = {
//     isWatching: boolean;
//     watchId: number | null;
// }

// type watchStatusType = {
//     isWatching: boolean;
//     watchId: number;
// }

// type stopWatchPosition = (watchStatus: watchStatusType) => void;

const SearchArea: VFC = memo(() => {
    const [ inputAreaKeyword, setInputAreaKeyword ] = useState('')
    const [ keyword, setKeyword ] = useRecoilState(SearchKeyword)
    const [ replaceKey, setReplaceKey ] = useRecoilState(ReplaceKey)
    const [ position, setPosition ] = useRecoilState(Position)
    const [ doRefetch, setDoRefetch] = useState(false)
    const { showMessage } = useMessage()

    //現在位置取得
    const presentLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const {latitude, longitude} = position.coords
                setPosition({latitude, longitude})  
                console.log(position);
            }, (error) => {
                switch (error.code) {
                    case 1:
                        showMessage({title: '位置情報の利用が許可されていません', status: 'error'})
                        break;
                    case 2:
                        showMessage({title: '位置情報の利用が許可されていません', status: 'error'})
                        break;
                    case 3:
                        showMessage({title: '現在位置が取得できませんでした', status: 'error'})
                        break;
                    case 4:
                        showMessage({title: 'タイムアウトになりました', status: 'error'})
                        break;
                    default:
                        showMessage({title: `その他のエラー(エラーコード:${error.code})`, status: 'error'})
                        break;
                }
            })
        } else {
            showMessage({title: '位置情報を取得できません', status: 'error'})
        }
    }, [position])
    

    const InputKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const searchKey = e.target.value.replace(/　/g," ")
        setKeyword(searchKey)
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


    return (
        <Flex direction='column' justify='center' align='center' w='100%' my={5}>
                <SearchInput keyword={keyword} InputKeyword={InputKeyword} SubmitEnter={SubmitEnter}/>
                <Box mt='20px'>
                    <PraimaryButton presentLocation={presentLocation} />
                </Box>
        </Flex>
    )
})

export default SearchArea
