import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { DirectivesModule } from './directives/directives.module';
import { DataStorageService } from './services/data-storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedComponentsModule, DirectivesModule],
  exports: [SharedComponentsModule, DirectivesModule],
  providers: [DataStorageService],
})
export class SharedModule {}
