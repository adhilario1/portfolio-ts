export interface Game {
    id: number,
    title: string,
    description?: string,
    tags: Array<String>,
    year: number,
    type: string, 
    thumbnail_url: string,
    url: string,
    outbound_url?: string,
    discipline:string,
    project?: string, 
    mobile: boolean
}