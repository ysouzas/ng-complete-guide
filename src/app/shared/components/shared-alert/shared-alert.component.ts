import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertType } from './models/alert-type.model';

@Component({
  selector: 'app-shared-alert',
  templateUrl: './shared-alert.component.html',
  styleUrls: ['./shared-alert.component.css'],
})
export class SharedAlertComponent implements OnInit {
  @Input() message: string = null;
  @Input() type: AlertType = AlertType.WARNING;
  @Output() close = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    debugger;
    this.close.emit();
  }
}
