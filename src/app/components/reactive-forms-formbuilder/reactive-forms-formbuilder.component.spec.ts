import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsFormbuilderComponent } from './reactive-forms-formbuilder.component';

describe('ReactiveFormsFormbuilderComponent', () => {
  let component: ReactiveFormsFormbuilderComponent;
  let fixture: ComponentFixture<ReactiveFormsFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
