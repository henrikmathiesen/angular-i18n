import { Component } from '@angular/core';
import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-another-route',
    standalone: true,
    templateUrl: './another-route.component.html'
})
export class AnotherRouteComponent implements RoutableComponentModel {
    componentName = 'AnotherRouteComponent';
}