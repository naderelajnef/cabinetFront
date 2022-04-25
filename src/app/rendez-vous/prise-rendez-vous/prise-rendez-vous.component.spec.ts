import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseRendezVousComponent } from './prise-rendez-vous.component';

describe('PriseRendezVousComponent', () => {
  let component: PriseRendezVousComponent;
  let fixture: ComponentFixture<PriseRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriseRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriseRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
