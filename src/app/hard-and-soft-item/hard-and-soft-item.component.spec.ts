import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardAndSoftItemComponent } from './hard-and-soft-item.component';

describe('HardAndSoftItemComponent', () => {
  let component: HardAndSoftItemComponent;
  let fixture: ComponentFixture<HardAndSoftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardAndSoftItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardAndSoftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
