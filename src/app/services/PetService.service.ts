import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class PetService{
    petList = [
        {
            name: 'Fluffy',
            breed: 'Pitbull',
            age: 5,
            isAggressive: false 
        }
    ]

    addPet(name: string, breed: string, age: number, isAggressive:boolean){
        const newPet = {name, breed, age, isAggressive}
        this.petList.push(newPet)
    }
}