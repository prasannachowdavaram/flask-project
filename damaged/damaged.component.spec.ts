import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedComponent } from './damaged.component';

describe('DamagedComponent', () => {
  let component: DamagedComponent;
  let fixture: ComponentFixture<DamagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
