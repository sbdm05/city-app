import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabActusPage } from './tab-actus.page';

describe('TabActusPage', () => {
  let component: TabActusPage;
  let fixture: ComponentFixture<TabActusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabActusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
