import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarsDetailComponent } from './list-cars-detail.component';

describe('ListCarsDetailComponent', () => {
  let component: ListCarsDetailComponent;
  let fixture: ComponentFixture<ListCarsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
