import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { HttpClientModule } from '@angular/common/http';
import { FullUserNamePipe } from './custom-pipes/full-user-name.pipe';
import { SquarePipe } from './custom-pipes/square.pipe';
import { PluralizePipe } from './custom-pipes/pluralize.pipe';
import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FullUserNamePipe,
    SquarePipe,
    PluralizePipe,
    HighlightDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
