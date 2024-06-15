import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useFactory: (locale: string) => {
        console.log(locale);

        return locale === 'sv' ? 'Kr' : 'USD';
      },
      deps: [LOCALE_ID]
    }
  ]
};

/* 

  https://dev.to/akilahngqueen/providers-and-importprovidersfrom-with-standalone-components-2he3
  providers: [importProvidersFrom(MatButtonModule)]

*/
