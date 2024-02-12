import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { RecipeService } from '../services/recipe.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  routeParams$ = this.createRouteParamsObservable();
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.routeParams$.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== null;
      this.initForm();
    });
  }

  private createRouteParamsObservable() {
    return this.route.params;
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);

      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImgPath),
      description: new FormControl(recipeDescription),
    });
  }
}
