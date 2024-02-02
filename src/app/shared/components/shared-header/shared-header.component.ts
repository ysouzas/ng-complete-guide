import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.css',
})
export class SharedHeaderComponent {
  isCollapsed = true;
}
