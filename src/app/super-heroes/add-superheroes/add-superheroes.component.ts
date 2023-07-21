import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-superheroes',
  templateUrl: './add-superheroes.component.html',
  styleUrls: ['./add-superheroes.component.css']
})
export class AddSuperheroesComponent {
 constructor(private fd : FormBuilder,
  private superHeroService:SuperHeroesService,
  private router:Router ){}
// Injecting the superhero service to call the api
// redirect kirimata router awashyai
 addSuperHeroForm = this.fd.group({
  name: [''],
  imageUrl: [''],
  franchise: [''],
  gender: ['']
 })

 noImage ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
 // method for adding new superhero
 create(){
// Import karapu service eka thula athi api eka call kirima

// form eke data log kara balima
//  console.log(this.addSuperHeroForm.value);

this.superHeroService.add((this.addSuperHeroForm.value as SuperHeroes)).subscribe(()=> {
 
  // navigate to a different page
  this.router.navigate(['/']);
})


 }

}
