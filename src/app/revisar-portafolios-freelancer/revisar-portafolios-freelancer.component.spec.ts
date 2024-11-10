import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarPortafoliosFreelancerComponent } from './revisar-portafolios-freelancer.component';

describe('RevisarPortafoliosFreelancerComponent', () => {
  let component: RevisarPortafoliosFreelancerComponent;
  let fixture: ComponentFixture<RevisarPortafoliosFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisarPortafoliosFreelancerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarPortafoliosFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
