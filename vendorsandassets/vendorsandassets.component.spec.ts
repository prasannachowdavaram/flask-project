import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsandassetsComponent } from './vendorsandassets.component';

describe('VendorsandassetsComponent', () => {
  let component: VendorsandassetsComponent;
  let fixture: ComponentFixture<VendorsandassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsandassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsandassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
