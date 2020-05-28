import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowquoteComponent } from './showquote.component';

describe('ShowquoteComponent', () => {
  let component: ShowquoteComponent;
  let fixture: ComponentFixture<ShowquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
