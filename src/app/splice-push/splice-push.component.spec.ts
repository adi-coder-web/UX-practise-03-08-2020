import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplicePushComponent } from './splice-push.component';

describe('SplicePushComponent', () => {
  let component: SplicePushComponent;
  let fixture: ComponentFixture<SplicePushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplicePushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplicePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
