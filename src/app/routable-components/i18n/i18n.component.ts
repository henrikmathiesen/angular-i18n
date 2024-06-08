import { Component } from '@angular/core';

import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-i18n',
    standalone: true,
    templateUrl: './i18n.component.html'
})
export class I18NComponent implements RoutableComponentModel {
    componentName = 'I18NComponent';
    componentHeader = 'I18N';

    theText = $localize `The text`;

    itemCount = 2;
}