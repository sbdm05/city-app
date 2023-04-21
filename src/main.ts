import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { newsInterceptor } from './interceptors/news.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


if (environment.production) {
  enableProdMode();
}

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http)
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    provideHttpClient(withInterceptors([newsInterceptor])),
    importProvidersFrom(TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
           }
        })),
  ],
});
