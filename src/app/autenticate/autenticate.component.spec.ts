import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticateComponent } from './autenticate.component';

describe('AutenticateComponent', () => {
  let component: AutenticateComponent;
  let fixture: ComponentFixture<AutenticateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
