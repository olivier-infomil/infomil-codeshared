import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSubscribedArticlesComponent } from './hp-subscribed-articles.component';

describe('HpSubscribedArticlesComponent', () => {
  let component: HpSubscribedArticlesComponent;
  let fixture: ComponentFixture<HpSubscribedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpSubscribedArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpSubscribedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
