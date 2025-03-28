import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeTimeComponent } from './tee-time.component';

describe('TeeTimeComponent', () => {
  let component: TeeTimeComponent;
  let fixture: ComponentFixture<TeeTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeeTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
