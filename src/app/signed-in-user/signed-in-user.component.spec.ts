import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedInUserComponent } from './signed-in-user.component';

describe('SignedInUserComponent', () => {
  let component: SignedInUserComponent;
  let fixture: ComponentFixture<SignedInUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedInUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
