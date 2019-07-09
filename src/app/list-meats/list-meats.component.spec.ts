import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeatsComponent } from './list-meats.component';

describe('ListMeatsComponent', () => {
  let component: ListMeatsComponent;
  let fixture: ComponentFixture<ListMeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
