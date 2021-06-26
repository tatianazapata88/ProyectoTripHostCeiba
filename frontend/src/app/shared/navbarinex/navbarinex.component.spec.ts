import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarinexComponent } from './navbarinex.component';

describe('NavbarinexComponent', () => {
  let component: NavbarinexComponent;
  let fixture: ComponentFixture<NavbarinexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarinexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarinexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
