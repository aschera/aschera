import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { ForceComponent } from './force/force.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RecentComponent } from './recent/recent.component';
import { DesignComponent } from './design/design.component';
import { SocialComponent } from './social/social.component';
import { CourseComponent } from './course/course.component';
import { PowerBiProjectsComponent } from './power-bi-projects/power-bi-projects.component';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MilestonesChartComponent } from './milestones-chart/milestones-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    ForceComponent,
    MainComponent,
    AboutComponent,
    RecentComponent,
    DesignComponent,
    SocialComponent,
    CourseComponent,
    PowerBiProjectsComponent,
    HomePageComponent,
    MilestonesChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,    // CLI adds AppRoutingModule to the AppModule's imports array
  ]
})
export class AppModule { }
