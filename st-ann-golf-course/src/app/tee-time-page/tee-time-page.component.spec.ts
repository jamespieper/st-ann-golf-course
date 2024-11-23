import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeTimePageComponent } from './tee-time-page.component';

describe('TeeTimePageComponent', () => {
  let component: TeeTimePageComponent;
  let fixture: ComponentFixture<TeeTimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeeTimePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeeTimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
