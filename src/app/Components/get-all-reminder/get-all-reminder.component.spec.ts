import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReminderComponent } from './get-all-reminder.component';

describe('GetAllReminderComponent', () => {
  let component: GetAllReminderComponent;
  let fixture: ComponentFixture<GetAllReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
