import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { SearchKeyword } from '../../store/globalState/SearchKeyword'
import { SearchResult } from '../../store/globalState/SearchResult'
import { Shop } from '../../types/api/Shop'
import { useMessage } from '../message/useMessage'

export const useSearchGourmet = () => {
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ shopList, setShopList ] = useRecoilState<Array<Shop>>(SearchResult)
    const { showMessage } = useMessage()
   const Search = async (keyword: string) => {
       try {
           // const keyword = useRecoilValue(SearchKeyword)
           let BaseURL = process.env.REACT_APP_BASE_URL
           const key = process.env.REACT_APP_HOTPEPPER_API_KEY
           
           setLoading(true)
           console.log(loading);
           const SearchResult = await axios.get(`${BaseURL}`, {
                                       params: {
                                            key: key,
                                            keyword: keyword,
                                            count: 50,
                                            format: 'json'
                                       }
                                   })
           console.log(SearchResult);
           console.log(loading);
           
           setShopList(SearchResult.data.results.shop)
       } catch (error) {
            showMessage({title: 'お店の取得に失敗しました', status: "error"})
       }
        
   }
   return {Search, shopList, loading}
}

