import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RunnerPageModule } from './runner.module';

describe('RunnerPage', () => {
  let component: RunnerPageModule;
  let fixture: ComponentFixture<RunnerPageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunnerPageModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
