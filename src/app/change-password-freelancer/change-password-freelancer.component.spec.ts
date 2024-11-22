import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordFreelancerComponent } from './change-password-freelancer.component';

describe('ChangePasswordFreelancerComponent', () => {
  let component: ChangePasswordFreelancerComponent;
  let fixture: ComponentFixture<ChangePasswordFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePasswordFreelancerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
