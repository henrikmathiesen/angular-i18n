import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

import { DateLocale } from '../../pipes';
import { RoutableComponentModel } from '../../models';

@Component({
    selector: 'app-i18n',
    standalone: true,
    imports: [CurrencyPipe, DatePipe, DateLocale],
    providers: [DatePipe],
    templateUrl: './i18n.component.html',
})
export class I18NComponent implements RoutableComponentModel {
    componentName = 'I18NComponent';
    componentHeader = 'I18N';

    theText = $localize `The text`;

    itemCount = 1;

    amount = 50000;
    theDate = new Date(2024,4,1);

    resetItemCount() {
        this.itemCount = 0;
    }

    // https://medium.com/@techwithease/internationalization-angular-f5121e81c696
}