import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Recipe } from '../../Models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() selected = new EventEmitter<void>();

  onSelected() {
    this.selected.emit();
  }
}
