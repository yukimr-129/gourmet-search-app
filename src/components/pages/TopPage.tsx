import React, { VFC } from 'react'
import PraimaryButton from '../atoms/button/PraimaryButton'
import SearchInput from '../atoms/searchInput/SearchInput'
import GourmetShopList from '../organisms/gourmetShopList/GourmetShopList'
import Header from '../organisms/Header'
import SearchArea from '../organisms/searchArea/SearchArea'

const TopPage: VFC = () => {
    return (
        <>
            <Header />
            <SearchArea />
            <GourmetShopList />
        </>
    )
}

export default TopPage
