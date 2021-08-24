import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { NgMaterialComponent } from './components/ng-material/ng-material.component';
import { TemplateRefVarComponent } from './components/template-ref-var/template-ref-var.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SvgComponent } from './components/svg/svg.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ReactiveFormsFormbuilderComponent } from './components/reactive-forms-formbuilder/reactive-forms-formbuilder.component';
import { ReactiveFormsSimpleValidationComponent } from './components/reactive-forms-simple-validation/reactive-forms-simple-validation.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'interpolation', component: StringInterpolationComponent  },
  { path: 'property-binding', component: PropertyBindingComponent  },
  { path: 'class-binding', component: ClassBindingComponent  },
  { path: 'style-binding', component: StyleBindingComponent  },
  { path: 'event-binding', component: EventBindingComponent  },
  { path: 'ng-material', component: NgMaterialComponent  },
  { path: 'temp-ref-var', component: TemplateRefVarComponent  },
  { path: 'two-way-binding', component: TwoWayBindingComponent  },
  { path: 'ng-if', component: NgIfComponent  },
  { path: 'ng-switch', component: NgSwitchComponent  },
  { path: 'ng-for', component: NgForComponent  },
  { path: 'pipes', component: PipesComponent  },
  { path: 'custom-pipes', component: CustomPipesComponent  },
  { path: 'parent', component: ParentComponent  },
  { path: 'svg', component: SvgComponent  },
  { path: 'emp-list', component: EmployeeListComponent  },



  { path: 'departments', component: DepartmentsComponent  },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailsComponent,
    children : [ { path: "overview", component: DepartmentOverviewComponent }, 
                { path: "contact", component: DepartmentContactComponent }]
  },

  //{ path: 'forms', component: FormsComponent  },
  // { path: 'forms', component: FormsComponent  },
  // { path: 'template-forms', component: TemplateFormsComponent  },
  // { path: 'reactive-forms', component: ReactiveFormsComponent  },
  
  { 
    path: 'forms', 
    component: FormsComponent,
    children : [ { path: "template-forms", component: TemplateFormsComponent }, 
                { path: "reactive-forms", component: ReactiveFormsComponent },
                { path: "form-builder", component: ReactiveFormsFormbuilderComponent },
                { path: "simple-validation", component: ReactiveFormsSimpleValidationComponent }]
  },
  
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponentComponent, HomeComponent, StringInterpolationComponent, PropertyBindingComponent,
ClassBindingComponent, StyleBindingComponent, EventBindingComponent, PageNotFoundComponent, NgMaterialComponent,
TemplateRefVarComponent, TwoWayBindingComponent, NgIfComponent, NgSwitchComponent, NgForComponent,
PipesComponent, ParentComponent, ChildComponent, SvgComponent, EmployeeListComponent, EmployeeDetailsComponent,
DepartmentsComponent, DepartmentDetailsComponent,
DepartmentOverviewComponent,
DepartmentContactComponent,
TemplateFormsComponent,
FormsComponent,
FormsComponent,
ReactiveFormsComponent,
ReactiveFormsFormbuilderComponent,
ReactiveFormsSimpleValidationComponent,
CustomPipesComponent];