import { Component, OnInit } from '@angular/core';
import { Signout, Signin } from '../state-models';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-signed-in-user',
  templateUrl: './not-signed-in-user.component.html',
  styleUrls: ['./not-signed-in-user.component.css']
})
export class NotSignedInUserComponent {
  constructor(private _store: Store, private _router: Router) {}

  signin(): void {
    this._store.dispatch(new Signin('some@email.com', 'password')).subscribe(
      _ => {
        console.log('You have signed in successfully');
        this._router.navigate(['/signedin']);
      },
      error => {
        console.log('Ooops!');
        console.log(error);
      }
    );
  }
}
