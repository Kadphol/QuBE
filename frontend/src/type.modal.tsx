export interface Iuser {
    loginStatus?: boolean
    type?: 'Facebook' | 'Guest'
    name?: string
    image?: string
    chapter?: number
    unit?: number
    star?: number[]
    highscore?: number
}