import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCourseDetailComponent } from './get-course-detail.component';

describe('GetCourseDetailComponent', () => {
  let component: GetCourseDetailComponent;
  let fixture: ComponentFixture<GetCourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCourseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
