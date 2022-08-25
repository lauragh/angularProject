import { Component } from '@angular/core';


@Component({
    selector: 'content-projection',
    template: `
        <p>Ejemplo de contenido </p>
        <ng-content></ng-content>
        <ng-content select="[content]"></ng-content>
    `
  
  })

  export class ContentProjectionComponent {
  }
