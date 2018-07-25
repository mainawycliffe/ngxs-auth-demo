import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignedInUserComponent } from './signed-in-user/signed-in-user.component';
import { GuardGuard } from './guard.guard';
import { NotSignedInUserComponent } from './not-signed-in-user/not-signed-in-user.component';

const routes: Routes = [
  {
    path: '',
    component: NotSignedInUserComponent
  },
  {
    path: 'signedin',
    component: SignedInUserComponent,
    canActivate: [GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
