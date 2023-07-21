import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperherosesComponent } from './super-heroes/all-superheroses/all-superheroses.component';
import { AddSuperheroesComponent } from './super-heroes/add-superheroes/add-superheroes.component';
import { EditSuperheroesComponent } from './super-heroes/edit-superheroes/edit-superheroes.component';

const routes: Routes = [
  {
    path:'',
    component: AllSuperherosesComponent
  },
  {
    path:'add',
    component: AddSuperheroesComponent
  },
  {
    path:'edit/:id',
    component: EditSuperheroesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
