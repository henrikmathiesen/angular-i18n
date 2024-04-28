import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

/* 

  https://dev.to/akilahngqueen/providers-and-importprovidersfrom-with-standalone-components-2he3
  providers: [importProvidersFrom(MatButtonModule)]

*/
