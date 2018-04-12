import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedetailsComponent } from './purchasedetails.component';

describe('PurchasedetailsComponent', () => {
  let component: PurchasedetailsComponent;
  let fixture: ComponentFixture<PurchasedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
