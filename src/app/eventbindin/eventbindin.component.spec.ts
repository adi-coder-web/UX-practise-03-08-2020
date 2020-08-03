import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindinComponent } from './eventbindin.component';

describe('EventbindinComponent', () => {
  let component: EventbindinComponent;
  let fixture: ComponentFixture<EventbindinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbindinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
