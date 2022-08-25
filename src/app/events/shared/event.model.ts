export interface IEvent {
    id: number
    name: string
    date: Date
    time: string
    format?: string
    onlineUrl?: string
    location?:{
        address?: string
        city?: string
        country?: string
    }
}