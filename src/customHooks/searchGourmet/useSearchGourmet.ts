import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { ReplaceKey } from '../../store/globalState/ReplaceKey'
import { SearchResult } from '../../store/globalState/SearchResult'
import { Shop } from '../../types/api/Shop'
import { useMessage } from '../message/useMessage'

export const useSearchGourmet = () => {
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ shopList, setShopList ] = useRecoilState<Array<Shop>>(SearchResult)
    const [ replaceKey, setReplaceKey] = useRecoilState(ReplaceKey)
    const { showMessage } = useMessage()

    useEffect(() => {
        const Search = async (keyword: string) => {
            setLoading(true)
            console.log(loading);
            try {
                const BaseURL = process.env.REACT_APP_BASE_URL
                const key = process.env.REACT_APP_HOTPEPPER_API_KEY
                const SearchResult = await axios.get(`${BaseURL}`, {
                                            params: {
                                                    key: key,
                                                    keyword: keyword,
                                                    count: 50,
                                                    format: 'json'
                                            }
                                        })
                setShopList(SearchResult.data.results.shop)
            } catch (error) {
                showMessage({title: 'お店の取得に失敗しました', status: "error"})
            }    
            setLoading(false) 
            console.log(loading);
        }
        Search(replaceKey)
        // setReplaceKey('')
    }, [replaceKey])

    // const Search = async (keyword: string) => {
    //     setLoading(true)
    //     console.log(loading);
        
    //         try {
    //             const BaseURL = process.env.REACT_APP_BASE_URL
    //             const key = process.env.REACT_APP_HOTPEPPER_API_KEY
    //             const SearchResult = await axios.get(`${BaseURL}`, {
    //                                         params: {
    //                                                 key: key,
    //                                                 keyword: keyword,
    //                                                 count: 50,
    //                                                 format: 'json'
    //                                         }
    //                                     })
    //             setShopList(SearchResult.data.results.shop)
    //         } catch (error) {
    //             showMessage({title: 'お店の取得に失敗しました', status: "error"})
    //         }    
    //         setLoading(false) 
    //         console.log(loading);
    // }
   return {shopList, loading}
}

