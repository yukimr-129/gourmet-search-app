import React from 'react'
import PraimaryButton from '../atoms/button/PraimaryButton'
import SearchInput from '../atoms/searchInput/SearchInput'
import GourmetStoreList from '../organisms/gourmetStoreList/GourmetStoreList'
import Header from '../organisms/Header'
import SearchArea from '../organisms/searchArea/SearchArea'

const TopPage = () => {
    return (
        <>
            <Header />
            <SearchArea />
            <GourmetStoreList />
        </>
    )
}

export default TopPage
