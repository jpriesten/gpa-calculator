import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGpaComponent } from './generate-gpa.component';

describe('GenerateGpaComponent', () => {
  let component: GenerateGpaComponent;
  let fixture: ComponentFixture<GenerateGpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateGpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateGpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
