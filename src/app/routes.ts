import { Routes } from "@angular/router";
import { EventListComponent } from "./events/event-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";
import { CreateEventComponent } from "./events/create-event.component";
import { ContentProjectionComponent } from "./events";

export const appRoutes:Routes = [
    { path: 'events', component: EventListComponent,
        resolve:{events:EventListResolver}},
    { path: 'events/new', component: CreateEventComponent },
    { path: 'content', component: ContentProjectionComponent },
    { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
    canDeactivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
]