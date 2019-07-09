import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarysFishComponent } from './marys-fish.component';

describe('MarysFishComponent', () => {
  let component: MarysFishComponent;
  let fixture: ComponentFixture<MarysFishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarysFishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarysFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
