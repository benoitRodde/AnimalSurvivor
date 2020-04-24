import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowGenesPageModule } from './show-genes.module';

describe('ShowGenesPage', () => {
  let component: ShowGenesPageModule;
  let fixture: ComponentFixture<ShowGenesPageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowGenesPageModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGenesPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
