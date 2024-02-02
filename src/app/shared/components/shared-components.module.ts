import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SharedHeaderComponent],
  imports: [CommonModule, NgbModule, NgbNavModule],
  exports: [SharedHeaderComponent],
})
export class SharedComponentsModule {}
