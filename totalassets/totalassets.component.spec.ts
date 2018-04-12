import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalassetsComponent } from './totalassets.component';

describe('TotalassetsComponent', () => {
  let component: TotalassetsComponent;
  let fixture: ComponentFixture<TotalassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
