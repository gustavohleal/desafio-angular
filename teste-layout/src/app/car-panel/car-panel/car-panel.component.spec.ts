import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPanelComponent } from './car-panel.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarPanelComponent', () => {
  let component: CarPanelComponent;
  let fixture: ComponentFixture<CarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CarPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
