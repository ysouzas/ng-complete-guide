import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from './../shared/models/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]> = this.createIngredientsObservable();

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  private createIngredientsObservable(): Observable<Ingredient[]> {
    return this.slService.ingredientsChanged;
  }
}
