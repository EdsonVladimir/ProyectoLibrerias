import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGenericosComponent } from './lib-genericos.component';

describe('LibGenericosComponent', () => {
  let component: LibGenericosComponent;
  let fixture: ComponentFixture<LibGenericosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibGenericosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibGenericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
