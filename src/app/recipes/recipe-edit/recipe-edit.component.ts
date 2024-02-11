import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParams$.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== null;
    });
  }

  private createRouteParamsObservable() {
    return this.route.params;
  }
}
