import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'interpolation', component: StringInterpolationComponent  },
  { path: 'property-binding', component: PropertyBindingComponent  },
  { path: 'class-binding', component: ClassBindingComponent  },
  { path: 'style-binding', component: StyleBindingComponent  },
  { path: 'event-binding', component: EventBindingComponent  },
  
  
  
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponentComponent, HomeComponent, StringInterpolationComponent, PropertyBindingComponent,
ClassBindingComponent, StyleBindingComponent, EventBindingComponent, PageNotFoundComponent];