import { Component } from '@angular/core';
import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-signal-advanced',
    standalone: true,
    templateUrl: './signal-advanced.component.html'
})
export class SignalAdvancedComponent implements RoutableComponentModel { 
    componentName = 'SignalAdvancedComponent';


}