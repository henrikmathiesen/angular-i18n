import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-i18n',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './i18n.component.html',
})
export class I18NComponent implements RoutableComponentModel {
    componentName = 'I18NComponent';
    componentHeader = 'I18N';

    theText = $localize `The text`;

    itemCount = 1;

    amount = 50000;

    resetItemCount() {
        this.itemCount = 0;
    }

    // https://medium.com/@techwithease/internationalization-angular-f5121e81c696
}