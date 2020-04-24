import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowModalPageModule } from './show-modal.module';

describe('ShowModalPage', () => {
  let component: ShowModalPageModule;
  let fixture: ComponentFixture<ShowModalPageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowModalPageModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowModalPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
