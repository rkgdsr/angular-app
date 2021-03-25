import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCardTwoComponent } from './dynamic-card-two.component';

describe('DynamicCardTwoComponent', () => {
  let component: DynamicCardTwoComponent;
  let fixture: ComponentFixture<DynamicCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
