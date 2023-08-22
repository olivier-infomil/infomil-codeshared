import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpRecentArticlesComponent } from './hp-recent-articles.component';

describe('HpRecentArticlesComponent', () => {
  let component: HpRecentArticlesComponent;
  let fixture: ComponentFixture<HpRecentArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpRecentArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpRecentArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
