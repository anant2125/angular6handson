import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElementExplorerComponent } from './ui-element-explorer.component';

describe('UiElementExplorerComponent', () => {
  let component: UiElementExplorerComponent;
  let fixture: ComponentFixture<UiElementExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElementExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElementExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
