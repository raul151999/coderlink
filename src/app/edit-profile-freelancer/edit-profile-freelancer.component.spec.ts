import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileFreelancerComponent } from './edit-profile-freelancer.component';

describe('EditProfileFreelancerComponent', () => {
  let component: EditProfileFreelancerComponent;
  let fixture: ComponentFixture<EditProfileFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfileFreelancerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
