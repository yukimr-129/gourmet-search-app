import React from 'react'
import { useParams } from 'react-router'

type ParamsId = {
    id: string;
}

const StoreDetail = () => {
    const { id } = useParams<ParamsId>()
    console.log(id);
    
    return (
        <div>
            店舗詳細
        </div>
    )
}

export default StoreDetail
