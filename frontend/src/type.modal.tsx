export interface Iuser {
    loginStatus: boolean
    name?: string
    image?: string
    progress?: {
        chaper?: number,
        unit?: number,
        star?: number[],
        score?: number
    }
}

export interface userProps {
    name: string
}