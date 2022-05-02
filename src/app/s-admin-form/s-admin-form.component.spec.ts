import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAdminFormComponent } from './s-admin-form.component';

describe('SAdminFormComponent', () => {
  let component: SAdminFormComponent;
  let fixture: ComponentFixture<SAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAdminFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
