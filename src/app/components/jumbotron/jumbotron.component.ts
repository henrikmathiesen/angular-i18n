import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { MoveUpOrDownDirective } from '../../directives';

@Component({
    selector: 'app-jumbotron',
    standalone: true,
    imports: [RouterLink, NgClass, MoveUpOrDownDirective],
    templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {

    @Input() componentName = 'HomeComponent';

}