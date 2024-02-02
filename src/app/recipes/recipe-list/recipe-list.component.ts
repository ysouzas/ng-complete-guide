import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() selected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Teste',
      'Teste',
      'https://www.allrecipes.com/thmb/bxtenUUpvdz5cbM-4OOaYsLVleM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/55803_PumpkinPancakes3x1photobychibichef-93bd97aff5f0429783b4ea3a74857be4.jpg'
    ),
    new Recipe(
      'Teste',
      'Teste',
      'https://www.allrecipes.com/thmb/bxtenUUpvdz5cbM-4OOaYsLVleM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/55803_PumpkinPancakes3x1photobychibichef-93bd97aff5f0429783b4ea3a74857be4.jpg'
    ),
    new Recipe(
      'Teste',
      'Teste',
      'https://www.allrecipes.com/thmb/bxtenUUpvdz5cbM-4OOaYsLVleM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/55803_PumpkinPancakes3x1photobychibichef-93bd97aff5f0429783b4ea3a74857be4.jpg'
    ),
  ];

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    debugger;
    this.selected.emit(recipe);
  }
}
