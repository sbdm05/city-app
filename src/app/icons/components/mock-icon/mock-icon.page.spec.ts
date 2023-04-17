import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockIconPage } from './mock-icon.page';

describe('MockIconPage', () => {
  let component: MockIconPage;
  let fixture: ComponentFixture<MockIconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MockIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
