import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIdComponent } from './input-id.component';

describe('InputIdComponent', () => {
  let component: InputIdComponent;
  let fixture: ComponentFixture<InputIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
