import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeIconPage } from './like-icon.page';

describe('LikeIconPage', () => {
  let component: LikeIconPage;
  let fixture: ComponentFixture<LikeIconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LikeIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
