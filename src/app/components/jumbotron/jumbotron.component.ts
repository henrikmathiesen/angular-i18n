import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { JumboLinkModel } from '../../models';
import { JumbotronLinkComponent } from './jumbotron-link/jumbotron-link.component';

@Component({
    selector: 'app-jumbotron',
    standalone: true,
    imports: [NgClass, JumbotronLinkComponent],
    templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {

    @Input() componentName = 'HomeComponent';

    jumboLinks: JumboLinkModel[] = [
        {
            iconName: 'home',
            label: 'Home',
            routerLink: ['home']
        },
        {
            iconName: 'activity',
            label: 'Another Route',
            routerLink: ['another-route']
        },
        {
            iconName: 'radio',
            label: 'Signal Inputs',
            routerLink: ['signal-inputs']
        },
        {
            iconName: 'wifi',
            label: 'Signal Advanced',
            routerLink: ['signal-advanced']
        }
    ];

}