import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDesarrolladoresFavoritosComponent } from './ver-desarrolladores-favoritos.component';

describe('VerDesarrolladoresFavoritosComponent', () => {
  let component: VerDesarrolladoresFavoritosComponent;
  let fixture: ComponentFixture<VerDesarrolladoresFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDesarrolladoresFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDesarrolladoresFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener tres freelancers en la lista', () => {
    expect(component.freelancersFavoritos.length).toBe(3);
  });

  it('debería eliminar un freelancer de favoritos', () => {
    const freelancerToRemove = component.freelancersFavoritos[0];
    component.eliminarDeFavoritos(freelancerToRemove);
    expect(component.freelancersFavoritos.length).toBe(2);
    expect(component.freelancersFavoritos).not.toContain(freelancerToRemove);
  });
});
