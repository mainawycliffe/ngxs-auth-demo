import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Signout } from '../state-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signed-in-user',
  templateUrl: './signed-in-user.component.html',
  styleUrls: ['./signed-in-user.component.css']
})
export class SignedInUserComponent implements OnInit {
  constructor(private _store: Store, private _router: Router) {
    console.log('Hello');
  }

  ngOnInit() {}

  signout(): void {
    this._store.dispatch(new Signout()).subscribe(
      _ => {
        console.log('signed out successfully');
        this._router.navigate(['/']);
      },
      error => {
        console.log('Ooops');
        console.log(error);
      }
    );
  }
}
