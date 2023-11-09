import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreImgTextCardComponent } from './we-are-img-text-card.component';

describe('WeAreImgTextCardComponent', () => {
  let component: WeAreImgTextCardComponent;
  let fixture: ComponentFixture<WeAreImgTextCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeAreImgTextCardComponent]
    });
    fixture = TestBed.createComponent(WeAreImgTextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
