import { Component, WritableSignal, Signal, signal, computed } from '@angular/core';
import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-signal-advanced',
    standalone: true,
    templateUrl: './signal-advanced.component.html'
})
export class SignalAdvancedComponent implements RoutableComponentModel { 
    componentName = 'SignalAdvancedComponent';
    componentHeader = 'Signal Advanced';

    // https://angular.io/guide/signals
    // https://angular.io/guide/signals#computed-signals
    // https://www.freecodecamp.org/news/angular-signals/

    count: WritableSignal<number> = signal(0);
    doubleCount: Signal<number> = computed(() => { return this.count() * 2 });

    onIncreaseCount() {
        // can use this.count.set()
        // or increase previous value
        this.count.update(v => v + 1);

        // Can also mutate properties in reference types
        // this.selectedVehicle.mutate(v => v.price = v.price + (v.price * .20));

        
    }   


}