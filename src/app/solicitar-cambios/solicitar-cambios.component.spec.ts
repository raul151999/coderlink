import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCambiosComponent } from './solicitar-cambios.component';

describe('SolicitarCambiosComponent', () => {
  let component: SolicitarCambiosComponent;
  let fixture: ComponentFixture<SolicitarCambiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarCambiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
