import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AllSuperherosesComponent } from './super-heroes/all-superheroses/all-superheroses.component';
import { HttpClientModule} from '@angular/common/http'
import {MatCardModule} from '@angular/material/card';
import { AddSuperheroesComponent } from './super-heroes/add-superheroes/add-superheroes.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSuperheroesComponent } from './super-heroes/edit-superheroes/edit-superheroes.component';
import { DeleteDialogSuperheroesComponent } from './super-heroes/delete-dialog-superheroes/delete-dialog-superheroes.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AllSuperherosesComponent,
    AddSuperheroesComponent,
    EditSuperheroesComponent,
    DeleteDialogSuperheroesComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
