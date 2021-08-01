import { atom } from 'recoil'

export const FirstMessageFlag = atom<boolean>({
    key: 'FirstMessageFlag',
    default: false
})