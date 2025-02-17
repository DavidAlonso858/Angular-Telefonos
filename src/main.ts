import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.route';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


// metodo de angular para iniciar la aplicacion sin necesidad de NgModule
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
});