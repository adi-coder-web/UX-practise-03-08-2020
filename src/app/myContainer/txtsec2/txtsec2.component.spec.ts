import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Txtsec2Component } from './txtsec2.component';

describe('Txtsec2Component', () => {
  let component: Txtsec2Component;
  let fixture: ComponentFixture<Txtsec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Txtsec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Txtsec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
