import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorryComponent } from './corry.component';

describe('CorryComponent', () => {
  let component: CorryComponent;
  let fixture: ComponentFixture<CorryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
