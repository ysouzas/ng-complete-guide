import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

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

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  private createIngredientsObservable(): Observable<Ingredient[]> {
    return this.slService.ingredientsChanged;
  }
}
