import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPopularArticlesComponent } from './hp-popular-articles.component';

describe('HpPopularArticlesComponent', () => {
  let component: HpPopularArticlesComponent;
  let fixture: ComponentFixture<HpPopularArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpPopularArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpPopularArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
