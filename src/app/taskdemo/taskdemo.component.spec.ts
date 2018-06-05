import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdemoComponent } from './taskdemo.component';

describe('TaskdemoComponent', () => {
  let component: TaskdemoComponent;
  let fixture: ComponentFixture<TaskdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
