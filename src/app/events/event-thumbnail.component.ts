import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <span [ngSwitch]="event?.format">
            <span *ngSwitchCase="'InPerson'" class="label label-warning">Presencial</span>
            <span *ngSwitchCase="'Online'" class="label label-warning">Online</span>
            <span *ngSwitchDefault class="label label-warning">Pendiente</span>
        </span>
        <div [hidden]="!event?.date" [ngStyle]="aplicarEstilo()">Date: {{event?.date | date}}</div>
        <div>Time: {{event?.time | tiempo}}</div>
        <div [ngClass]="aplicarClase()" *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div class="display-flex" [hidden]="!event?.onlineUrl">
            Online URL:
            <div [ngClass]="{blue: event?.onlineUrl}">
                 {{event?.onlineUrl}}
            </div>
        </div>
    </div>
    `,
    styleUrls: ['../app.component.css']
})
export class EventThumbnailComponent {
   @Input() event:any

   aplicarClase() {
    if(this.event && this.event.location){
        return 'recuadro';
    }
    return '';
   }

   aplicarEstilo(){
    if(this.event && this.event.date){
        return { background: 'black'};
    }
    return {};
   }
}