import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhiveNotesComponent } from './arhive-notes.component';

describe('ArhiveNotesComponent', () => {
  let component: ArhiveNotesComponent;
  let fixture: ComponentFixture<ArhiveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArhiveNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhiveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
