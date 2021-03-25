import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyChildComponent } from './family-child.component';

describe('FamilyChildComponent', () => {
  let component: FamilyChildComponent;
  let fixture: ComponentFixture<FamilyChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
