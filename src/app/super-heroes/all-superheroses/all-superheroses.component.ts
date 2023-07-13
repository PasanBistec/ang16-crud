import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';

@Component({
  selector: 'app-all-superheroses',
  templateUrl: './all-superheroses.component.html',
  styleUrls: ['./all-superheroses.component.css']
})
export class AllSuperherosesComponent implements OnInit {
   
  allSuperHeroes:SuperHeroes[] = [];

   constructor(private superHeroService:SuperHeroesService){}
   ngOnInit(): void {
    this.getPASAN();
   }
   
   getPASAN(){
    this.superHeroService.get()
    .subscribe((data) => {
      this.allSuperHeroes = data;
    })
   }
   
}
