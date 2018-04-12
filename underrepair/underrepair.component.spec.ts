import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderrepairComponent } from './underrepair.component';

describe('UnderrepairComponent', () => {
  let component: UnderrepairComponent;
  let fixture: ComponentFixture<UnderrepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderrepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
