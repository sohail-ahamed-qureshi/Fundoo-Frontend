import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabDialogContentComponent } from './collab-dialog-content.component';

describe('CollabDialogContentComponent', () => {
  let component: CollabDialogContentComponent;
  let fixture: ComponentFixture<CollabDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
