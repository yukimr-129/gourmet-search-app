import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import React, { ChangeEvent, KeyboardEvent, VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import { SearchKeyword } from '../../../store/globalState/SearchKeyword'

const SearchInput: VFC = () => {
    const [keyword, setKeyword] = useRecoilState(SearchKeyword)
    const { Search } = useSearchGourmet()
    const InputKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    const SubmitEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // e.preventDefault()
            Search()
        }
    }
    return (
        <InputGroup w='50%'>    
            <InputLeftElement 
                pointerEvents='none'
                children={<SearchIcon color="gray.300" />} 
            />
            <Input type='text' value={keyword} onChange={InputKeyword} onKeyPress={SubmitEnter} bg='white' placeholder='search store...'/>
        </InputGroup>
    )
}

export default SearchInput
