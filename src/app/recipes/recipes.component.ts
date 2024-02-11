import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { RecipeService } from './services/recipe.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent {
  constructor() {}

  ngOnInit(): void {}
}
