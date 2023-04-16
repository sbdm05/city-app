import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabListeByCategoryPage } from './tab-liste-by-category.page';

describe('TabListeByCategoryPage', () => {
  let component: TabListeByCategoryPage;
  let fixture: ComponentFixture<TabListeByCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabListeByCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
