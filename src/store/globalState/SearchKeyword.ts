import { atom } from "recoil";

export const SearchKeyword = atom<string>({
    key: 'SearchKeyword',
    default: ''
})