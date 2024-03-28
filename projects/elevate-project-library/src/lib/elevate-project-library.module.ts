import { NgModule } from '@angular/core';
import { ElevateProjectLibraryComponent } from './elevate-project-library.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'details', component:DetailsPageComponent }
]

@NgModule({
  declarations: [
    ElevateProjectLibraryComponent,
    MainPageComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ElevateProjectLibraryModule { }
