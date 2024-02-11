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
      this.editedItemIndex = index;
      var isNotNaN = !isNaN(index);
      var isNotNull = index !== null;
      this.editMode = isNotNaN && isNotNull;

      if (this.editMode) {
        this.editedItem = this.slService.getIngredient(this.editedItemIndex);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    });
  }

  onAddItem(form: NgForm) {
    const value = form.value;

    const ingredient = new Ingredient(value.name, value.amount);

    this.slService.addIngredient(ingredient);
  }

  private createEditingItemObservable() {
    return this.slService.startedEditing;
  }
}
