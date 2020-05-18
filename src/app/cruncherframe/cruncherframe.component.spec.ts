import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruncherframeComponent } from './cruncherframe.component';

describe('CruncherframeComponent', () => {
  let component: CruncherframeComponent;
  let fixture: ComponentFixture<CruncherframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruncherframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruncherframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
