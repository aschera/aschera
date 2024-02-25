import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBiProjectsComponent } from './power-bi-projects.component';

describe('PowerBiProjectsComponent', () => {
  let component: PowerBiProjectsComponent;
  let fixture: ComponentFixture<PowerBiProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerBiProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerBiProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
