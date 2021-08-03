import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { Loading } from '../../store/globalState/Loading'
import { ReplaceKey } from '../../store/globalState/ReplaceKey'
import { SearchResult } from '../../store/globalState/SearchResult'
import { useMessage } from '../message/useMessage'
import { Position } from '../../store/globalState/Position'
import { SearchKeyword } from '../../store/globalState/SearchKeyword'
import { FirstMessageFlag } from '../../store/globalState/FirstMessageFlag'


export const useSearchGourmet = () => {
    const [ keyword, setKeyword ] = useRecoilState(SearchKeyword)
    const [ loading, setLoading ] = useRecoilState(Loading)
    const [ shopList, setShopList ] = useRecoilState(SearchResult)
    const [ replaceKey, setReplaceKey] = useRecoilState(ReplaceKey)
    const [ position, setPosition ] = useRecoilState(Position)
    const [firstMessageFlag, setFirstMessageFlag] = useRecoilState(FirstMessageFlag)
    const { showMessage } = useMessage()

    useEffect(() => {
        let unmounted = false
        console.log(unmounted);
        
        const Search = async (replaceKey: string | null = null, keyword: string | null = null, latitude: number | null, longitude: number | null) => {
            setLoading(true)
            setFirstMessageFlag(false)
            
            //現在位置を取得している場合は、keywordを優先する
            const positionFlag = position.latitude && position.longitude
            const SearchKeyword = positionFlag ? keyword : replaceKey

            console.log(SearchKeyword);
            
            try {
                const BaseURL = process.env.REACT_APP_BASE_URL
                const key = process.env.REACT_APP_HOTPEPPER_API_KEY
                const SearchResult = await axios.get(`${BaseURL}`, {
                                            params: {
                                                    key: key,
                                                    keyword: SearchKeyword,
                                                    lat: latitude,
                                                    lng: longitude,
                                                    count: 50,
                                                    format: 'json'
                                            }
                                        })

                if (!unmounted) {
                    setShopList(SearchResult.data.results.shop ?? [])
                }

                console.log(shopList);
            } catch (error) {
                showMessage({title: 'お店の取得に失敗しました', status: "error"})
            }    
            setLoading(false) 
        }
        
        Search(replaceKey, keyword, position.latitude, position.longitude)

        return () => {
            unmounted = true
        }
    }, [replaceKey, position.latitude, position.longitude])

   return {shopList, loading}
}

