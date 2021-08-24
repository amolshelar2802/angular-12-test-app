import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsSimpleValidationComponent } from './reactive-forms-simple-validation.component';

describe('ReactiveFormsSimpleValidationComponent', () => {
  let component: ReactiveFormsSimpleValidationComponent;
  let fixture: ComponentFixture<ReactiveFormsSimpleValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsSimpleValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsSimpleValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
