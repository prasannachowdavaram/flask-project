import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtorepairComponent } from './addtorepair.component';

describe('AddtorepairComponent', () => {
  let component: AddtorepairComponent;
  let fixture: ComponentFixture<AddtorepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtorepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtorepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
