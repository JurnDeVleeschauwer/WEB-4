import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AantalProductenGaanKopenComponent } from './aantal-producten-gaan-kopen.component';

describe('AantalProductenGaanKopenComponent', () => {
  let component: AantalProductenGaanKopenComponent;
  let fixture: ComponentFixture<AantalProductenGaanKopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AantalProductenGaanKopenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AantalProductenGaanKopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
