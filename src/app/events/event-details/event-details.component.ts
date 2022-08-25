import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px 20px;}
    `]
})

export class EventDetailsComponent {
    event: any
    reviewed: boolean = false 

    constructor(private eventService: EventService, private route:ActivatedRoute, private router:Router){

    }
    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

    volver(){
        this.router.navigate(['/events']);
    }

    toggleReviewed() {
        this.reviewed = !this.reviewed
        console.log(this.reviewed)
      }
}