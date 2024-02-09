import { SharedComponentsModule } from './components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedComponentsModule, DirectivesModule],
  exports: [SharedComponentsModule, DirectivesModule],
})
export class SharedModule {}
