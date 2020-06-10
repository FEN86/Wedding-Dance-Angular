import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersEditorComponent } from './offers-editor.component';

describe('OffersEditorComponent', () => {
  let component: OffersEditorComponent;
  let fixture: ComponentFixture<OffersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
