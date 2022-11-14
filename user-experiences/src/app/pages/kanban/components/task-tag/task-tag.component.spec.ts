import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagComponent } from './task-tag.component';

describe('TaskTagComponent', () => {
  let component: TaskTagComponent;
  let fixture: ComponentFixture<TaskTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
