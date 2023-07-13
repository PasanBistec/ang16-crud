import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperherosesComponent } from './super-heroes/all-superheroses/all-superheroses.component';

const routes: Routes = [
  {
    path:'',
    component: AllSuperherosesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
