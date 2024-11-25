import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTimePanelComponent } from './book-time-panel.component';

describe('BookTimePanelComponent', () => {
  let component: BookTimePanelComponent;
  let fixture: ComponentFixture<BookTimePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTimePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTimePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
