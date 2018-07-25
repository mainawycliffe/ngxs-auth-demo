import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthState } from './auth-state';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OurHttpInterceptor } from './http-interceptor';
import { SignedInUserComponent } from './signed-in-user/signed-in-user.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NotSignedInUserComponent } from './not-signed-in-user/not-signed-in-user.component';

@NgModule({
  declarations: [AppComponent, SignedInUserComponent, NotSignedInUserComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.token', 'auth.email', 'auth.name']
    }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OurHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
