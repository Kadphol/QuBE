interface detail {    
    // progress: number[],
    // star: number[],
    highscore: number
}

export interface Iuser {
    loginStatus: boolean
    name?: string
    image?: string
    detail?:{
        [key: string]: detail
    }
}