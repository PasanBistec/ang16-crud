import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogSuperheroesComponent } from '../delete-dialog-superheroes/delete-dialog-superheroes.component';

@Component({
  selector: 'app-all-superheroses',
  templateUrl: './all-superheroses.component.html',
  styleUrls: ['./all-superheroses.component.css']
})
export class AllSuperherosesComponent implements OnInit {
   
  allSuperHeroes:SuperHeroes[] = [];

   constructor(private superHeroService:SuperHeroesService,
    private dialog:MatDialog
    ){}
   ngOnInit(): void {
    this.getPASAN();
   }
   
   getPASAN(){
    this.superHeroService.get()
    .subscribe((data) => {
      this.allSuperHeroes = data;
    })
   }

   deleteItem(id: number){
    // model ekata data pass kirima
     const dialofRef = this.dialog.open(DeleteDialogSuperheroesComponent,{
      width:'250px',
      data:{id}
     });

        //close krata passe variable ekn ain kirima
        dialofRef.afterClosed().subscribe((result) => {
          if(result){
            this.allSuperHeroes = this.allSuperHeroes.filter(item => item.id !== result);
          }
        })
   

   }
   
}
