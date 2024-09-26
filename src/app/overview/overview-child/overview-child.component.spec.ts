import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewChildComponent } from './overview-child.component';

describe('OverviewChildComponent', () => {
  let component: OverviewChildComponent;
  let fixture: ComponentFixture<OverviewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
