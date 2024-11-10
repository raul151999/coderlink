import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialProyectosComponent } from './historial-proyectos.component';

describe('HistorialProyectosComponent', () => {
  let component: HistorialProyectosComponent;
  let fixture: ComponentFixture<HistorialProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
