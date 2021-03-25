import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCardOneComponent } from './dynamic-card-one.component';

describe('DynamicCardOneComponent', () => {
  let component: DynamicCardOneComponent;
  let fixture: ComponentFixture<DynamicCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCardOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
