import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('asddasasd', 5),
    new Ingredient('asddasa22sd', 9),
    new Ingredient('asdda22sasd', 6),
  ];

  ngOnInit(): void {
    console.log(this.ingredients);
  }
}
