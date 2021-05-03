import axios from 'axios'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { SearchKeyword } from '../../store/globalState/SearchKeyword'

export const useSearchGourmet = () => {
   const Search = async () => {
       try {
           // const keyword = useRecoilValue(SearchKeyword)
           let BaseURL = process.env.REACT_APP_BASE_URL
           const SearchResult = await axios.get('/api/gourmet/v1/', {
                                       params: {
                                            key: '331e92f1bdba62ff',
                                            keyword: '焼肉',
                                       }
                                   })
           console.log(SearchResult);
       } catch (error) {
           console.log(error.message);
       }
        
   }
   return {Search}
}

