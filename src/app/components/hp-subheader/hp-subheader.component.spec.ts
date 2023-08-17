import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSubheaderComponent } from './hp-subheader.component';

describe('HpSubheaderComponent', () => {
  let component: HpSubheaderComponent;
  let fixture: ComponentFixture<HpSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpSubheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
