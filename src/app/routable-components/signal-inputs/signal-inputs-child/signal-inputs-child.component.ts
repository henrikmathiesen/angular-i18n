import { Component, Output, Input, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'app-signal-inputs-child',
    standalone: true,
    templateUrl: './signal-inputs-child.component.html'
})
export class SignalInputsChildComponent implements OnChanges {

    @Output() childButtonClicked = new EventEmitter(false);
    @Input() parentButtonClicked = false;


    onChildButtonClick() {
        console.log('SignalInputsChildComponent, onChildButtonClick');
        this.childButtonClicked.emit(true); // communication up to parent via EventEmitter
    }

    ngOnChanges(changes: SimpleChanges): void {
        // 2) Communication down to child via input and listen here for changes, if we want to react in TypeScript (a template binding will update automatically)
        // ngOnChanges will only run if value is changed
        console.log('SignalInputsChildComponent, ngOnChanges', changes['parentButtonClicked'].currentValue);
    }
}