import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowGenePageModule } from './show-gene.module';

describe('ShowGenePage', () => {
  let component: ShowGenePageModule;
  let fixture: ComponentFixture<ShowGenePageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowGenePageModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGenePageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
