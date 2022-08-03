import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeItemComponent } from './acerca-de-item.component';

describe('AcercaDeItemComponent', () => {
  let component: AcercaDeItemComponent;
  let fixture: ComponentFixture<AcercaDeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
