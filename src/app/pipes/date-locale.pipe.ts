import { Pipe, PipeTransform, LOCALE_ID, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateLocale',
    standalone: true
})
export class DateLocale implements PipeTransform {

    constructor(
        private datePipe: DatePipe                      // Provided in parent component
    ) {
    }

    private readonly locale = inject(LOCALE_ID);        // Seems to be provided by Angular somewhere

    transform(value: Date) {

        const format = this.locale === 'sv' ? 'YYYY-MM-dd' : 'MM/dd/YYYY';
        
        return this.datePipe.transform(value, format);

    }

}