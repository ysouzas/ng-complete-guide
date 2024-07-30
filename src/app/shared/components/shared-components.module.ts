import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedAlertComponent } from './shared-alert/shared-alert.component';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { SharedLoadSpinnerComponent } from './shared-load-spinner/shared-load-spinner.component';

@NgModule({
  declarations: [
    SharedHeaderComponent,
    SharedLoadSpinnerComponent,
    SharedAlertComponent,
  ],
  imports: [CommonModule, NgbModule, NgbNavModule, RouterModule],
  exports: [
    SharedHeaderComponent,
    SharedLoadSpinnerComponent,
    SharedAlertComponent,
  ],
})
export class SharedComponentsModule {}
