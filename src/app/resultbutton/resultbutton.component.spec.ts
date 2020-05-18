import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultbuttonComponent } from './resultbutton.component';

describe('ResultbuttonComponent', () => {
  let component: ResultbuttonComponent;
  let fixture: ComponentFixture<ResultbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
