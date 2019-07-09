import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PallasComponent } from './pallas.component';

describe('PallasComponent', () => {
  let component: PallasComponent;
  let fixture: ComponentFixture<PallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
