import axios from 'axios'
import React, { useState } from 'react'

import { useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { SearchKeyword } from '../../store/globalState/SearchKeyword'
import { SearchResult } from '../../store/globalState/SearchResult'
import { Shop } from '../../types/api/Shop'

export const useSearchGourmet = () => {
   const [ shopList, setShopList ] = useRecoilState<Array<Shop>>(SearchResult)

   const Search = async (keyword: string) => {
       try {
           // const keyword = useRecoilValue(SearchKeyword)
           let BaseURL = process.env.REACT_APP_BASE_URL
           const key = process.env.REACT_APP_HOTPEPPER_API_KEY
           
           const SearchResult = await axios.get(`${BaseURL}`, {
                                       params: {
                                            key: key,
                                            keyword: keyword,
                                            format: 'json'
                                       }
                                   })
           console.log(SearchResult);
           setShopList(SearchResult.data.results.shop)
       } catch (error) {
           console.log(error.message);
       }
        
   }
   return {Search, shopList}
}

