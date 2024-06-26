import { ScreenTypes } from 'src/enums/useWindowSize'

export interface IWindowSize {
    width: number,
    height: number,
    screen: ScreenTypes,
    scrollX: number,
    scrollY: number
}