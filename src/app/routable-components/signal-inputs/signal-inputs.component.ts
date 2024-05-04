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

    //
    // Repitition

    isParentButtonClicked = false;

    onParentButtonClick() {
        console.log('SignalInputsComponent, onParentButtonClick');
        this.isParentButtonClicked = true;
    }

    onChildButtonClick() {
        console.log('SignalInputsComponent, onChildButtonClick');
    }

    /* 
    
       Signal Inputs 

        https://www.youtube.com/@deborah_kurata/videos
        https://www.youtube.com/watch?v=yjCeaiWXC0U&ab_channel=DeborahKurata

        https://blog.angular-university.io/angular-signal-inputs/
        https://medium.com/@davidepassafaro/angular-new-output-function-d12e6c31ce2e

        TODO: Learn more about computed (see import in Child Component)
    
    */
}