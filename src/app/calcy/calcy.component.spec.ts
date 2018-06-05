import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcyComponent } from './calcy.component';

describe('CalcyComponent', () => {
  let component: CalcyComponent;
  let fixture: ComponentFixture<CalcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
