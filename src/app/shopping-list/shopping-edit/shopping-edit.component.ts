import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';

import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editingItem$ = this.createEditingItemObservable();
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingItem$.subscribe((index: number) => {
      if (!isNaN(index) && index !== null) {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(this.editedItemIndex);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    });
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);

    this.editMode
      ? this.slService.updateIngredients(this.editedItemIndex, newIngredient)
      : this.slService.addIngredient(newIngredient);

    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.editingItem$.next(null);
  }

  onDelete() {
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex);
  }

  private createEditingItemObservable() {
    return this.slService.startedEditing;
  }
}
