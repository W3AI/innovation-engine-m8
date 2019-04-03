import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3aiosComponent } from './w3aios.component';

describe('W3aiosComponent', () => {
  let component: W3aiosComponent;
  let fixture: ComponentFixture<W3aiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3aiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3aiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
