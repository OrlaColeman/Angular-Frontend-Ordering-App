import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSelectionComponent } from './number-selection.component';

describe('NumberSelectionComponent', () => {
  let component: NumberSelectionComponent;
  let fixture: ComponentFixture<NumberSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
