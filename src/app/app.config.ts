<<<<<<< HEAD

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
=======
import { ApplicationConfig } from '@angular/core';
>>>>>>> 62430e25947e4b996b2eace06a3dd2d0b686b0b2
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient()
=======
    provideRouter(routes)
>>>>>>> 62430e25947e4b996b2eace06a3dd2d0b686b0b2
  ]
};