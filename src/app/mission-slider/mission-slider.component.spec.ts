import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSliderComponent } from './mission-slider.component';

describe('MissionSliderComponent', () => {
  let component: MissionSliderComponent;
  let fixture: ComponentFixture<MissionSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionSliderComponent]
    });
    fixture = TestBed.createComponent(MissionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
