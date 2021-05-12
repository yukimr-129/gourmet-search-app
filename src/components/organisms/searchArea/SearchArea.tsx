import { Box, Center, Flex, Stack } from '@chakra-ui/layout'
import React, { ChangeEvent, KeyboardEvent, useCallback, VFC } from 'react'
import { useRecoilState } from 'recoil'
import { useSearchGourmet } from '../../../customHooks/searchGourmet/useSearchGourmet'
import { SearchKeyword } from '../../../store/globalState/SearchKeyword'
import PraimaryButton from '../../atoms/button/PraimaryButton'
import SearchInput from '../../atoms/searchInput/SearchInput'

const SearchArea: VFC = () => {
    const [keyword, setKeyword] = useRecoilState(SearchKeyword)
    const { Search } = useSearchGourmet()
    const InputKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }, [setKeyword])

    const SubmitEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // e.preventDefault()
            const key = keyword
            //全角スペースを半角に置換
            const ReplaceKey = key.replace(/　/g," ")
            console.log(ReplaceKey);
            Search(ReplaceKey)
        }
    }, [Search])

    return (
        <Flex direction='column' justify='center' align='center' w='100%' my={5}>
                <SearchInput keyword={keyword} InputKeyword={InputKeyword} SubmitEnter={SubmitEnter} />
                <Box mt='20px'>
                    <PraimaryButton />
                </Box>
        </Flex>
    )
}

export default SearchArea
