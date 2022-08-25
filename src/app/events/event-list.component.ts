import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
// import { ToastrService } from '../common/toastr.service'

@Component({
    template: `
    <div>
        <content-projection>
            <p content>hola</p>
            <h1>Eventos del verano</h1>
            <hr/>
            <div class="row">
                <div [routerLink]="['/events', event.id]" *ngFor="let event of events" class="col-md-5">
                    <!-- <event-thumbnail (click)="abrirToast(event.name)" [event]="event"></event-thumbnail>    -->
                    <event-thumbnail  class="pointer" [event]="event"></event-thumbnail>   
                </div>    
            </div>
            <button [routerLink]="['/events/new']" class="enlace" >Crear nuevo evento</button>
        </content-projection>
    </div>
    `,
    styles: [`
        .enlace { background-color: white; color: black; padding: 10px}
        .pointer { cursor: pointer !important}
    `]
})
export class EventListComponent {
    events: any;

    constructor(private eventService: EventService, private route:ActivatedRoute){
    }
    // constructor(private eventService: EventService, private toastr: ToastrService){
    // }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }

    // abrirToast(nombre: any){
    //     this.toastr.success(nombre);
    // }
    
}