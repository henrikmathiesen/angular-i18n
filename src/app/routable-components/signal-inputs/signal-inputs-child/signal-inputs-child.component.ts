import { Component, Output, Input, EventEmitter, SimpleChanges, OnChanges, input, output, effect } from '@angular/core'; // computed (TODO: Learn more about computed)

@Component({
    selector: 'app-signal-inputs-child',
    standalone: true,
    templateUrl: './signal-inputs-child.component.html'
})
export class SignalInputsChildComponent implements OnChanges {

    //
    // Repitition

    @Output() childButtonClicked = new EventEmitter(false);
    @Input() parentButtonClicked = false;

    onChildButtonClick() {
        console.log('SignalInputsChildComponent, onChildButtonClick');
        this.childButtonClicked.emit(true); // communication up to parent via EventEmitter

        //
        // Signal, communicate up to parent via emit on the OutputEmitter

        this.childButtonClickedSignal.emit(true);

        // Can handle it in parent component in the same way as old eventEmitter
        // Parent Component
        // <app-signal-inputs-child (childButtonClicked)="onChildButtonClick()" (childButtonClickedSignal)="onChildButtonClick()" .....>

        //
        // Can also subscribe in an effect function in Parent Component, read more
        // https://medium.com/@davidepassafaro/angular-new-output-function-d12e6c31ce2e
    }

    ngOnChanges(changes: SimpleChanges): void {
        // 2) Communication down to child via input and listen here for changes, if we want to react in TypeScript (a template binding will update automatically)
        // ngOnChanges will only run if value is changed
        console.log('SignalInputsChildComponent, ngOnChanges', changes['parentButtonClicked'].currentValue);
    }

    //
    // Signal Inputs

    // 2) Signal, recieved here (hovering over input, it returns an InputSignal). And we use effect in constructor, instead of ngOnChanges
    parentButtonClickedSignal = input(false);
    constructor() {
        effect(() => {
            // effect will only run if value is changed
            console.log('SignalInputsChildComponent, effect', this.parentButtonClickedSignal());
        });
    }

    // Signal, communicate up to parent
    childButtonClickedSignal = output<boolean>();


}