import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SharedHeaderComponent],
  imports: [CommonModule, NgbModule, NgbNavModule, RouterModule],
  exports: [SharedHeaderComponent],
})
export class SharedComponentsModule {}
