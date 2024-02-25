import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonesChartComponent } from './milestones-chart.component';

describe('MilestonesChartComponent', () => {
  let component: MilestonesChartComponent;
  let fixture: ComponentFixture<MilestonesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilestonesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilestonesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
