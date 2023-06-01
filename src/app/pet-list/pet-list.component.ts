import { Component } from '@angular/core';
import { PetService } from '../services/PetService.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent {
  name: string = ""
  breed: string = ""
  age: number = 0
  isAggressive: boolean = false

  constructor(public petService: PetService){}

  handleClick(){
    if(this.name === "" || this.breed === ""){
      alert('enter name and breed')
    }else{
      this.petService.addPet(this.name, this.breed, this.age, this.isAggressive)
      this.name = ""
      this.breed = ""
      this.age = 0
      this.isAggressive = false
    }
  }
  
}
