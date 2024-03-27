import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ElevateProjectLibraryModule, MainPageComponent } from 'projects/elevate-project-library/src/public-api';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ElevateProjectLibraryModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const customElement = createCustomElement(MainPageComponent,{injector : this.injector})
    customElements.define('elevate-project-player',customElement)
  }
}
