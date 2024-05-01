import { Component } from '@angular/core';
import { RoutableComponentModel } from '../../models';
import { SignalInputsChildComponent } from './signal-inputs-child/signal-inputs-child.component';

@Component({
    selector: 'app-signal-inputs',
    standalone: true,
    imports: [SignalInputsChildComponent],
    templateUrl: './signal-inputs.component.html'
})
export class SignalInputsComponent implements RoutableComponentModel {
    componentName = 'SignalInputsComponent';
    isParentButtonClicked = false;

    onParentButtonClick() {
        console.log('SignalInputsComponent, onParentButtonClick');
        this.isParentButtonClicked = true;
    }

    onChildButtonClick() {
        console.log('SignalInputsComponent, onChildButtonClick');
    }

    // TODO: https://www.youtube.com/@deborah_kurata/videos
}