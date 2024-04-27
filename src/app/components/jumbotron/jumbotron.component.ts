import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-jumbotron',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {

    @Input() componentName = 'HomeComponent';

    // TODO: https://www.npmjs.com/package/@ng-icons/core

}