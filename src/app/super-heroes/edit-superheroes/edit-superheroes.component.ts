import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SuperHeroesService } from '../super-heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeroes } from '../super-heroes';

@Component({
  selector: 'app-edit-superheroes',
  templateUrl: './edit-superheroes.component.html',
  styleUrls: ['./edit-superheroes.component.css']
})
export class EditSuperheroesComponent  implements OnInit{
  constructor(private fd : FormBuilder,
    private superHeroService:SuperHeroesService,
    private route:ActivatedRoute,
    private router :Router ){}
  ngOnInit(): void {
    // parameter value eka ganima
    this.route.paramMap.subscribe((param)=>{
      let id = Number(param.get('id'));
      this.getById(id);
    })
   }

    noImage ="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"

    updateSuperHeroForm = this.fd.group({
      id:[0],
      name: [''],
      imageUrl: [''],
      franchise: [''],
      gender: ['']
     })

     getById(id:number){
      this.superHeroService.getByIID(id).subscribe((response) => {
         this.updateSuperHeroForm.setValue(response);
      });
     }

     update(){
      this.superHeroService.update((this.updateSuperHeroForm.value as SuperHeroes)).subscribe(()=> {
 
        // navigate to a different page
        this.router.navigate(['/']);
      })
     }

     


}
