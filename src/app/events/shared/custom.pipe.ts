import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'tiempo'})
export class TiempoPipe implements PipeTransform{
    transform(value: string):string {
        switch(value){
            case '8am': return 'mañana'
            case '6pm': return 'tarde'
            case '2pm': return 'mediodia'
            default: return value
        }
    }
}