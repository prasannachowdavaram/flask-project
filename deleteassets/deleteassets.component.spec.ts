import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteassetsComponent } from './deleteassets.component';

describe('DeleteassetsComponent', () => {
  let component: DeleteassetsComponent;
  let fixture: ComponentFixture<DeleteassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
