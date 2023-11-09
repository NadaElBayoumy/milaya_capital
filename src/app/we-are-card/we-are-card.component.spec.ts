import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreCardComponent } from './we-are-card.component';

describe('WeAreCardComponent', () => {
  let component: WeAreCardComponent;
  let fixture: ComponentFixture<WeAreCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeAreCardComponent]
    });
    fixture = TestBed.createComponent(WeAreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
