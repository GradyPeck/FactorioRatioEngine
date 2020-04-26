import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercruncherComponent } from './numbercruncher.component';

describe('NumbercruncherComponent', () => {
  let component: NumbercruncherComponent;
  let fixture: ComponentFixture<NumbercruncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbercruncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercruncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
