import {Injectable} from '@angular/core'
import { Subject } from 'rxjs';
import { IEvent } from './event.model';

@Injectable()
export class EventService{
    getEvents(){
        let subject = new Subject();
        setTimeout(() => {subject.next(events); subject.complete();},
          2000)
        return subject;
    }

    getEvent(id:number){
      return events.find(event => event.id === id)
    }

    saveEvent(event: IEvent) {
      event.id = 99
      events.push(event)
      console.log(events)
    }
}

const events:IEvent[] = [
    {
        name:'Fiesta del verano 22',
        date: new Date(2022, 6, 15),
        time: '8am',
        format: 'Online',
        location: 
        {
          address: 'Avenida Maisonave',
          city: 'Alicante',
          country: 'España'
        },
        onlineUrl: 'http://unangularsummit.org',
        id: 1
      },
      {
        name:'Tardeo Capgemini',
        date: new Date(2022, 6, 3),
        time: '2pm',
        format: 'InPerson',
        location: 
        {
          address: 'Centro comercial condomina',
          city: 'Murcia', 
          country: 'España'
        },
        onlineUrl: 'http://unangularsummit.org',
        id:2
    
      },
      {
        name:'Carrera Karts',
        date: new Date(2022, 9, 23),
        time: '6pm',
        format: 'Online',
        location: 
        {
          address: 'San Vicente del Raspeig',
          country: 'España'
        },
        id:3
      },
      {
        name:'Hash Code',
        date: new Date(2022, 10, 8),
        time: '8am',
        id:4
      }
]