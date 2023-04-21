import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabLandingPage } from './tab-landing.page';

describe('TabLandingPage', () => {
  let component: TabLandingPage;
  let fixture: ComponentFixture<TabLandingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
