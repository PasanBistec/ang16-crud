import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-superheroes',
  templateUrl: './add-superheroes.component.html',
  styleUrls: ['./add-superheroes.component.css']
})
export class AddSuperheroesComponent {
 constructor(private fd : FormBuilder){}

 addSuperHeroForm = this.fd.group({
  name: [''],
  imageUrl: [''],
  franchise: [''],
  gender: ['']
 })

}
