import { atom } from "recoil";
import { Shop } from "../../types/api/Shop";

export const SearchResult = atom<Array<Shop>>({
    key: 'SearchResult',
    default: []
})