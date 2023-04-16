import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabFaqPage } from './tab-faq.page';

describe('TabFaqPage', () => {
  let component: TabFaqPage;
  let fixture: ComponentFixture<TabFaqPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabFaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
