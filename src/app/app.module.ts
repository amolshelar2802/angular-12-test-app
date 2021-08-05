import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
// import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
// import { PropertyBindingComponent } from './property-binding/property-binding.component';
// import { ClassBindingComponent } from './class-binding/class-binding.component';
// import { StyleBindingComponent } from './style-binding/style-binding.component';
// import { EventBindingComponent } from './event-binding/event-binding.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
