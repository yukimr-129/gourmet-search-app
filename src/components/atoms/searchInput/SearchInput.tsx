import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import React, { ChangeEvent, KeyboardEvent, memo, VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import { SearchKeyword } from '../../../store/globalState/SearchKeyword'

type Props = {
    keyword: string;
    InputKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
    SubmitEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: VFC<Props> = memo((props) => {
    const { keyword, InputKeyword, SubmitEnter } = props
    return (
        <InputGroup w={{base: '80%', md: '50%'}}>    
            <InputLeftElement 
                pointerEvents='none'
                children={<SearchIcon color="gray.300" />} 
            />
            <Input type='text' value={keyword} onChange={InputKeyword} onKeyPress={SubmitEnter} bg='white' placeholder='search store...'/>
        </InputGroup>
    )
})

export default SearchInput