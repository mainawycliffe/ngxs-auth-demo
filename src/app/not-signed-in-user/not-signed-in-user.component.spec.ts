import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSignedInUserComponent } from './not-signed-in-user.component';

describe('NotSignedInUserComponent', () => {
  let component: NotSignedInUserComponent;
  let fixture: ComponentFixture<NotSignedInUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSignedInUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSignedInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
