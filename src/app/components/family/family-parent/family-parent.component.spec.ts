import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyParentComponent } from './family-parent.component';

describe('FamilyParentComponent', () => {
  let component: FamilyParentComponent;
  let fixture: ComponentFixture<FamilyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
