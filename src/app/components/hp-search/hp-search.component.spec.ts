import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSearchComponent } from './hp-search.component';

describe('HpSearchComponent', () => {
  let component: HpSearchComponent;
  let fixture: ComponentFixture<HpSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
