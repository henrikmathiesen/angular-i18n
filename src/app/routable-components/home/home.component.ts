import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { RoutableComponentModel } from '../../models';
import { TestService } from '../../services';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [DatePipe],
    providers: [DatePipe],
    templateUrl: './home.component.html'
})
export class HomeComponent implements RoutableComponentModel, OnInit {
    componentName = 'HomeComponent';
    
    today = new Date();
    todayFormatted: string | null = '';

    val = '';

    constructor(
        private datePipe: DatePipe,
        private testService: TestService
    ){}

    ngOnInit(): void {
        this.todayFormatted = this.datePipe.transform(this.today);
        this.val = this.testService.getValue();
    }

    // https://angular.io/guide/standalone-components
    // https://angular.io/guide/standalone-components#providing-services-to-a-subset-of-routes
}
