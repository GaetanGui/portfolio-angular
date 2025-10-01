import {
    ApplicationConfig,
    provideZoneChangeDetection,
    inject
} from '@angular/core';import { provideRouter } from '@angular/router';
import {provideHttpClient} from "@angular/common/http";
import {provideTranslateService, TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideAnimations } from '@angular/platform-browser/animations';



import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideTranslateService({
      lang: 'fr',
      fallbackLang: 'fr',
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      })
    }),
    
  ]
};
