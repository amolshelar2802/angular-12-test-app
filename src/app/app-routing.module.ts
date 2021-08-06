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
import { NgMaterialComponent } from './ng-material/ng-material.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';


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
  { path: 'component-nteraction', component: ComponentInteractionComponent  },
  { path: 'pipes', component: PipesComponent  },

  
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
TemplateRefVarComponent, TwoWayBindingComponent, NgIfComponent, NgSwitchComponent, NgForComponent, ComponentInteractionComponent,
PipesComponent];