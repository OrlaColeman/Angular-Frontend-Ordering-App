import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProduceComponent } from './total-produce.component';

describe('TotalProduceComponent', () => {
  let component: TotalProduceComponent;
  let fixture: ComponentFixture<TotalProduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
