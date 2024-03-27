import { NgModule } from '@angular/core';
import { ElevateProjectLibraryComponent } from './elevate-project-library.component';
import { MainPageComponent } from './components/main-page/main-page.component';



@NgModule({
  declarations: [
    ElevateProjectLibraryComponent,
    MainPageComponent
  ],
  imports: [
  ],
  exports: [
    MainPageComponent
  ]
})
export class ElevateProjectLibraryModule { }
