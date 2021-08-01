import { atom } from 'recoil'

type position = {
    latitude: number | null;
    longitude: number | null;
}
export const Position = atom<position>({
    key: 'Position',
    default: {latitude: null, longitude: null}
})