import { ApplicationConfig } from '@angular/core';
import { NoPreloading, , provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(NoPreloading)), provideHttpClient() ]
};
