import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ImageDisplayComponent} from './components/image-display/image-display.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {ReactiveFormsModule} from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {StorageJwtService} from './services/storage-jwt.service';
import {PageImagesService} from './services/page-images.service';
import { NextComponent } from './components/next/next.component';
import { RandomComponent } from './components/random/random.component';
import {InterceptorService} from './services/interceptor.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ImageDisplayComponent,
    NextComponent,
    RandomComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [LoginService, StorageJwtService, PageImagesService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
