import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabAnnuairePage } from './tab-annuaire.page';

describe('TabAnnuairePage', () => {
  let component: TabAnnuairePage;
  let fixture: ComponentFixture<TabAnnuairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabAnnuairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
