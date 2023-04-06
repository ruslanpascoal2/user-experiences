import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTaskCardComponent } from './kanban-task-card.component';

describe('KanbanTaskCardComponent', () => {
  let component: KanbanTaskCardComponent;
  let fixture: ComponentFixture<KanbanTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
