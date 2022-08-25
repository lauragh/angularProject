import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import{
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent,
  ContentProjectionComponent,
  TiempoPipe
} from './events/index'

import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({ 
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    ContentProjectionComponent,
    TiempoPipe
  ],
  providers: [ EventService, ToastrService, EventRouteActivator, EventListResolver],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

