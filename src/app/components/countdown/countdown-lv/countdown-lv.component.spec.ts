import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLvComponent } from './countdown-lv.component';

describe('CountdownLvComponent', () => {
  let component: CountdownLvComponent;
  let fixture: ComponentFixture<CountdownLvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownLvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
