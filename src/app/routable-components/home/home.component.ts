import { Component } from '@angular/core';
import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html'
})
export class HomeComponent implements RoutableComponentModel {
    componentName = 'HomeComponent';
}