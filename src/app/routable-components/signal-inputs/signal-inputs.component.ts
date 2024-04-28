import { Component } from '@angular/core';
import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-signal-inputs',
    standalone: true,
    templateUrl: './signal-inputs.component.html'
})
export class SignalInputsComponent implements RoutableComponentModel {
    componentName = 'SignalInputsComponent';

    // TODO: https://www.youtube.com/@deborah_kurata/videos
}