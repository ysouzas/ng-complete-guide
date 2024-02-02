import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping-list/shopping.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbNavModule,
    SharedModule,
    RecipesModule,
    ShoppingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
