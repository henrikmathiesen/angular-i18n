import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { JumbotronComponent } from './components';
import { RoutableComponentModel } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JumbotronComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  componentName = '';

  onActivate($event: RoutableComponentModel) {
    this.componentName = $event.componentName;
  }

}
