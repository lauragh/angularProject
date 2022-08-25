import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Muestra los hijos del componente -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
