import {CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";
import { Router } from "@angular/router";
import { EventDetailsComponent } from "./event-details.component";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService:EventService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot) {
        //Se declara como booleano
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        
        if(!eventExists){
            this.router.navigate(['404'])
        }
        return eventExists
    }

    canDeactivate(component:EventDetailsComponent) {
        return component.reviewed
      }
}