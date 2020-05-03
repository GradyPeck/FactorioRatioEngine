import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvloaderComponent } from './csvloader.component';

describe('CsvloaderComponent', () => {
  let component: CsvloaderComponent;
  let fixture: ComponentFixture<CsvloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
