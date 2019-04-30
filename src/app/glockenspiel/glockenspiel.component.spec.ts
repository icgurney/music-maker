import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlockenspielComponent } from './glockenspiel.component';

describe('GlockenspielComponent', () => {
  let component: GlockenspielComponent;
  let fixture: ComponentFixture<GlockenspielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlockenspielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlockenspielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
