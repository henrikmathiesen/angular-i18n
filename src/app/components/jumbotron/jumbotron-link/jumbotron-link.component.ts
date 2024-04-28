import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

import { MoveUpOrDownDirective } from '../../../directives';
import { JumboLinkModel } from '../../../models';

@Component({
    selector: 'app-jumbotron-link',
    standalone: true,
    imports: [NgClass, RouterLink, MoveUpOrDownDirective],
    templateUrl: './jumbotron-link.component.html'
})
export class JumbotronLinkComponent {
    @Input() jumboLink: JumboLinkModel;
    @Input() isLast = false;
}