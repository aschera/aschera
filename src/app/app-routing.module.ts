import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomePageComponent } from '../app/home-page/home-page.component';
import { PowerBiProjectsComponent } from './power-bi-projects/power-bi-projects.component';

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent,
  children: [
    {
      path: 'power-bi-projects', component: PowerBiProjectsComponent
    },
  ]
  }
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
